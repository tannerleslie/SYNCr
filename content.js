/*
const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});
*/
var io = require('socket.io');

var socket = io.connect();

socket.on('log', function(array){
  console.log.apply(console,array);
});

$(document.documentElement).on('click', function(event){
  console.log('this works - console');
  socket.send('this works - socket');
  let $store = $(event.currentTarget); //this needs to be passed on to the other user
  //then $store.trigger('click') will force the browser to make a click
  //something must be put in place to stop an infinite loop occuring
  //EX: on user clicks something and that is sent to the other user who 'clicks'
  //the same thing and so that click is sent back to the first user and so on
  //returning false stops the event from occuring, returning true allows it to happen

  return true;
});
