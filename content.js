
const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

socket.addEventListener('message', function (event) {
    //console.log('Message from server ', JSON.stringify(event.data));
    //$(event.data).hide(); doesn't work
});

$('*').on('click', function(event){
  console.log(JSON.stringify($(event.currentTarget).get()));
  let store = $(event.currentTarget); //this needs to be passed on to the other user
  //then $store.trigger('click') will force the browser to make a click
  //something must be put in place to stop an infinite loop occuring
  //EX: on user clicks something and that is sent to the other user who 'clicks'
  //the same thing and so that click is sent back to the first user and so on
  //returning false stops the event from occuring, returning true allows it to happen
  socket.send(store);
  //$(event.currentTarget).hide();
  return false;
});
