const express = require('express');

const app = express();

const room = new Map();


app.get('/room', (req, res) => {
  res.json(room);
});

app.listen(8888, (error) => {
  if (error) {
    throw Error(error)
  }
  console.log('Сервер запущен!');
});