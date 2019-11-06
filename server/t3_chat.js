module.exports = (io, uuid, userMethods, ttt_boardMethods) => {
  // const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

  const { addUser, removeUser, getUser, getUsersInRoom } = userMethods;
  const { getRoomBoard, createBoard, editBox, deleteBoard } = ttt_boardMethods;
  let allowedPlayer;

  io.on('connect', socket => {
    socket.on('join', ({ name, room }, callback) => {
      // console.log(name, room);
      const { error, user } = addUser({ id: socket.id, name, room });
      // console.log(`error: ${error}`);

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

      // ===========================================================================================

      // create tic tac toe board data
      createBoard(user.room);
      // io.to(user.room).emit('create board', {
      //   ttt_board: createBoard(user.room)
      // });

      // ===========================================================================================

      io.in(user.room).emit('empty board', {
        ticTacToe_board: getRoomBoard(user.room)
      });
      // socket.on('create board', () => {
      //   createBoard(user.room);
      // });

      // ===========================================================================================

      io.to(user.room).emit('room data', {
        room: user.room,
        users: getUsersInRoom(user.room)
      });

      callback();
    });

    // when sending text
    socket.on('send message', msg => {
      const user = getUser(socket.id);
      // console.log('send message:', user);

      io.to(user.room).emit('message', {
        id: uuid.v4(),
        user: user.name,
        text: msg
      });
      // io.to(user.room).emit('room data', {
      //   room: user.room,
      //   users: getUsersInRoom(user.room)
      // });
    });

    // ===========================================================================================
    // let allowedPlayer;
    socket.on('make move', ({ firstMove, data, oponent }) => {
      console.log({ firstMove });
      console.log({ data });
      console.log({ oponent });
      console.log({ allowedPlayer });

      if (firstMove || data.user === allowedPlayer) {
        const users = getUsersInRoom(data.room);
        if (users.length === 2) {
          const updatedBoard = editBox(data);
          // io.to(user.room).emit('display board', {
          //   updatedBoard
          // });
          io.to(data.room).emit('display board', {
            ticTacToe_board: updatedBoard,
            nextPlayer: oponent
          });
        }
        allowedPlayer = oponent;
      }
    });

    // ===========================================================================================

    // socket.on('edit ttt_board', ({ id, icon, user, room }, callback) => {
    //   const edited = editBox({ id, icon, user, room });
    //   if (edited) return callback(edited);
    // });

    socket.on('delete board', ({ room }) => {
      console.log('deleting board...');
      deleteBoard(room);
      io.to(room).emit('display board', {
        ticTacToe_board: updatedBoard,
        nextPlayer: null
      });
    });

    // when leaving
    socket.on('disconnect', () => {
      console.log('server socket disconnecting...');
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
        const board = deleteBoard(user.room);
        if (board) {
          io.to(user.room).emit('delete board');
        }
      }
    });
  });
};
