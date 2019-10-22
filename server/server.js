const express = require('express');
const connectDB = require('./config/db');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Connect to database
connectDB();

app.get('/', (req, res) => {
  res.json({ msg: 'Backend yall' });
});

io.on('connection', socket => {
  // when someone enters
  console.log('a user connected');
  socket.on('join', ({ name, room }) => {
    console.log(name, room);
  });
  // when sending text
  socket.on('chat message', msg => {
    console.log(`message: ${msg}`);
    io.emit('chat message', msg);
  });
  // when leaving
  socket.on('disconnect', () => {
    console.log('user has left');
  });
});

const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
http.listen(PORT, () => console.log(`Server started on port ${PORT}`));
