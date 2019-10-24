const express = require('express');
const connectDB = require('./config/db');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const uuid = require('uuid');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

// Connect to database
connectDB();

app.get('/', (req, res) => {
  res.json({ msg: 'Backend yall' });
});

io.on('connect', socket => {
  socket.on('join', ({ name, room }, callback) => {
    console.log(name, room);
    const { error, user } = addUser({ id: socket.id, name, room });
    console.log(`error: ${error}`);

    if (error) return callback(error);

    socket.join(user.room);

    // user welcome message
    socket.emit('message', {
      id: uuid.v4(),
      user: 'admin',
      // text: `${user.name}, welcome to "${user.room}"`
      text: `Welcome, ${user.name}`
    });
    // broadcast to everyone but this user that he has entered the chat
    socket.broadcast.to(user.room).emit('message', {
      id: uuid.v4(),
      user: 'admin',
      text: `${user.name} just joined`
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
    console.log('send message:', user);

    io.to(user.room).emit('message', {
      id: uuid.v4(),
      user: user.name,
      text: msg
    });
    io.to(user.room).emit('room data', {
      room: user.room,
      users: getUsersInRoom(user.room)
    });
  });

  // when leaving
  socket.on('disconnect', () => {
    console.log('disconnecting...');
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', {
        id: uuid.v4(),
        user: 'admin',
        text: `${user.name} just left`
      });
    }
  });
});

const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
http.listen(PORT, () => console.log(`Server started on port ${PORT}`));
