const express = require('express');
const connectDB = require('./config/db');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const uuid = require('uuid');

const chat = require('./chat');

const userMethods = require('./users');
const ttt_boardMethods = require('./ticTacToeBoard');

// Connect to database
connectDB();

app.get('/', (req, res) => {
  res.json({ msg: 'GameHub Classics' });
});

chat(io, uuid, userMethods, ttt_boardMethods);

const PORT = process.env.PORT || 5000;

http.listen(PORT, () => console.log(`Server started on port ${PORT}`));
