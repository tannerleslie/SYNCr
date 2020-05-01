
const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('message', function (event) {
    if(event.data !== 'undefined'){
      console.log('Redirecting to ', event.data);
      window.location.href = event.data;
    }
});

$('*').on('click', function(event){
  console.log('click registered');
  let store = $(event.currentTarget).attr('href');
  socket.send(store);
  return false;
});
