const express = require("express");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  pingTimeout: 1000,
  maxHttpBufferSize: 1e8,
  pingInterval: 3000,
});

app.use(express.json());

const room = new Map([
  ["users", new Map()],
  ["messages", []],
]);

app.get("/room", (req, res) => {
  const obj = {
    users: [...room.get("users").values()],
    messages: [...room.get("messages").values()],
  };
  res.json(obj);
});

io.on("connect", (socket) => {
  socket.on("USER:JOIN", ({ name, photo }) => {
    socket.join();
    room.get("users").set(socket.id, { name, photo });
    const users = [...room.get("users").values()];
    socket.broadcast.emit("USER:JOINED", users);
  });
  console.log("user connected > ", socket.id);
  socket.on("ROOM:NEW_MESSAGE", ({ userName, userPhoto, text, img }) => {
    const obj = {
      userName,
      userPhoto,
      text,
      img,
    };
    if (room.get("messages").length > 100) {
      room.get("messages").shift()
    }
    room.get("messages").push(obj);
    socket.broadcast.emit("ROOM:NEW_MESSAGE", obj);
  });

  socket.on("disconnect", () => {
    if (room.get("users").delete(socket.id)) {
      const users = [...room.get("users").values()];
      socket.broadcast.emit("USER:JOINED", users);
    }
  });
});

server.listen(8888, (error) => {
  if (error) {
    throw Error(error);
  }
  console.log("Сервер запущен!");
});
