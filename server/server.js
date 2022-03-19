const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.json());

const room = new Map([['users', new Map()], ['messages', new Map()]]);

app.get('/room', (req, res) => {
  res.json(room);
});

app.post('/room', (req, res) => {
  const { name, photo } = req.body;
  res.send();
});

io.on('connection', socket => {
  socket.on('USER:JOIN', ( { name, photo}) => {
    // socket.join()
    room.get('users').set(socket.id, {name, photo});
    const users = [...room.get('users').values()];
    socket.broadcast.emit('USER:JOINED', name);
    console.log('rooom >', name)
  })
  console.log('user connected > ', socket.id);
});

server.listen(8888, (error) => {
  if (error) {
    throw Error(error); 
  }
  console.log('Сервер запущен!');
});