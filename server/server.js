const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  maxHttpBufferSize: 1e8
});



// app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb', extended: true}));

app.use(express.json());

const room = new Map([['users', new Map()], ['messages', []]]);

app.get('/room', (req, res) => {
  res.json(room);
});

app.post('/room', (req, res) => {
  const { userName, userPhoto, text, img } = req.body;
  console.log(req.body)
  res.send();
});

io.on('connection', socket => {
  socket.on('USER:JOIN', ( { name, photo}) => {
    // socket.join()
    room.get('users').set(socket.id, {name, photo});
    const users = [...room.get('users').values()];
    socket.emit('USER:JOINED', users);
    console.log('rooom >', users)
  })
  console.log('user connected > ', socket.id);

  socket.on('ROOM:NEW_MESSAGE', ({ userName, userPhoto, text, img }) => {
    const obj = {
      userName,
      userPhoto,
      text,
      img
    }
    console.log('obj >', obj)
    room.get('messages').push(obj)
    socket.broadcast.emit('ROOM:NEW_MESSAGE', obj)
  })

  // socket.on('disconnect', () => {
  //   room.forEach(value => {
  //     if (value.get('users').delete(socket.id)) {
  //       const users = [...value.get('users').values()];
  //       socket.broadcast.emit('USER:LEAVE', users);
  //     }
  //   });
  // });
});



server.listen(8888, (error) => {
  if (error) {
    throw Error(error); 
  }
  console.log('Сервер запущен!');
});