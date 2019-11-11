module.exports = (io, uuid, userMethods, ttt_boardMethods) => {
  const { addUser, removeUser, getUser, getUsersInRoom } = userMethods;
  const {
    addToPlayAgainList,
    cleanPlayAgainList,
    createBoard,
    editBox,
    resetBoard,
    deleteBoard
  } = ttt_boardMethods;
  let allowedPlayer;

  io.on('connect', socket => {
    socket.on('join', ({ name, room }, callback) => {
      const { error, user } = addUser({ id: socket.id, name, room });

      if (error) return callback(error);

      socket.join(user.room);

      // user welcome message
      socket.emit('message', {
        id: uuid.v4(),
        user: 'admin',
        text: `Welcome, ${user.name}`
      });
      // broadcast to everyone but this user that he has entered the chat
      socket.broadcast.to(user.room).emit('message', {
        id: uuid.v4(),
        user: 'admin',
        text: `${user.name} just joined`
      });

      // create tic tac toe board data
      const emptyBoard = createBoard(user.room);
      socket.emit('display board', {
        ticTacToe_board: emptyBoard,
        nextPlayer: null
      });

      io.to(user.room).emit('room data', {
        room: user.room,
        users: getUsersInRoom(user.room)
      });

      callback();
    });

    // when sending text
    socket.on('send message', msg => {
      const user = getUser(socket.id);

      io.to(user.room).emit('message', {
        id: uuid.v4(),
        user: user.name,
        text: msg
      });
    });

    // let allowedPlayer;
    socket.on('make move', ({ firstMove, data, oponent }) => {
      if (firstMove || data.user === allowedPlayer) {
        const users = getUsersInRoom(data.room);
        if (users.length === 2) {
          const updatedBoard = editBox(data);
          io.to(data.room).emit('display board', {
            ticTacToe_board: updatedBoard,
            nextPlayer: oponent
          });
        }
        allowedPlayer = oponent;
      }
    });

    // play again
    socket.on('play again', ({ name, room, draw }) => {
      const who_want_to_play = addToPlayAgainList({ name, room });
      if (who_want_to_play.length === 2) {
        const newBoard = resetBoard(room);
        let randomlySelectedPlayer;
        if (draw) {
          randomlySelectedPlayer =
            who_want_to_play[
              Math.floor(Math.random() * who_want_to_play.length)
            ].name;
        }
        io.to(room).emit('replay game', { randomlySelectedPlayer });

        io.to(room).emit('display board', {
          ticTacToe_board: newBoard,
          nextPlayer: null
        });

        cleanPlayAgainList({ room });
      }
    });

    // when leaving
    socket.on('disconnect', () => {
      const user = removeUser(socket.id);

      if (user) {
        io.to(user.room).emit('message', {
          id: uuid.v4(),
          user: 'admin',
          text: `${user.name} just left`
        });
        io.to(user.room).emit('room data', {
          room: user.room,
          users: getUsersInRoom(user.room)
        });
        deleteBoard(user.room);
        const users = getUsersInRoom(user.room);
        let board;
        if (users.length === 1) {
          board = createBoard(user.room);
          io.to(user.room).emit('one player left');
        }
        if (users.length === 0) {
          cleanPlayAgainList(user.room);
        }
        io.to(user.room).emit('display board', {
          ticTacToe_board: board,
          nextPlayer: null
        });
      }
    });
  });
};
