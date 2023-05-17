#!/usr/bin/env node
const express = require('express');
const app = express();
const https = require('https');
const server = https.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

io.on('connection', (socket) => {
  
  socket.on('write1', (data) => {
    io.emit("datachange1", data);
  });

  socket.on('write2', (data) => {
    io.emit("datachange2", data);
  });

  socket.on('write3', (data) => {
    io.emit("datachange3", data);
  });

});

io.listen(3001);