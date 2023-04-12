const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

io.on('connection', (socket) => {
  
  socket.on('write', (data) => {
    io.emit("datachange", data);
  });

});

io.listen(3001);