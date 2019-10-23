const express = require('express');
const connectDB = require('./config/db');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

// Connect to database
connectDB();

app.get('/', (req, res) => {
  res.json({ msg: 'Backend yall' });
});

io.on('connection', socket => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    // user welcome message
    socket.emit('message', {
      user: 'admin',
      text: `${user.name}, welcome to room ${user.room}`
    });
    // broadcast to everyone but this user that he has entered the chat
    socket.broadcast
      .to(user.room)
      .emit('message', {
        user: 'admin',
        text: `${user.name} has entered the room`
      });
    socket.join(user.room);

    io.to(user.room).emit('room data', {
      room: user.room,
      users: getUsersInRoom(user.room)
    });

    callback();
  });

  // when sending text
  socket.on('send message', (msg, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });
    io.to(user.room).emit('room data', {
      room: user.room,
      users: getUsersInRoom(user.room)
    });

    callback();
  });

  // when leaving
  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', {
        user: 'admin',
        text: `${user.name} has left`
      });
    }
  });
});

const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
http.listen(PORT, () => console.log(`Server started on port ${PORT}`));
