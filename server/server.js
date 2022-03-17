const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const room = new Map();

app.get('/room', (req, res) => {
  res.json(room);
});

io.on('connection', socket => {
  console.loog('user connected > ', socket)
})

server.listen(8888, (error) => {
  if (error) {
    throw Error(error); 
  }
  console.log('Сервер запущен!');
});