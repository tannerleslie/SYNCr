
const WebSocket = require('ws');
const express = require('express');

const app = express();

const server = new WebSocket.Server({ server: app.listen(8080) });

console.log('the server is running');

server.on('connection', socket => {
  socket.on('message', message => {
    console.log(message);
    server.clients.forEach(client => {
      client.send(message);
    });
  });
});
