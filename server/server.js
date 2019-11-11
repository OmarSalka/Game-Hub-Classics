const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const uuid = require('uuid');

const chat = require('./chat');

const userMethods = require('./users');
const ttt_boardMethods = require('./ticTacToeBoard');

// Connect to database
connectDB();

chat(io, uuid, userMethods, ttt_boardMethods);

// Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
// Set static folder
app.use(express.static('client/build'));

app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
);
// }

const PORT = process.env.PORT || 5000;

http.listen(PORT, () => console.log(`Server started on port ${PORT}`));
