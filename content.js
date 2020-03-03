//const firstHref = $("a[href^='http']").eq(0).attr("href");
//alert(firstHref);


$(document.documentElement).on('click', function(event){
  alert('this works');
  let $store = $(event.currentTarget); //this needs to be passed on to the other user
  //then $store.trigger('click') will force the browser to make a click
  //something must be put in place to stop an infinite loop occuring
  //EX: on user clicks something and that is sent to the other user who 'clicks'
  //the same thing and so that click is sent back to the first user and so on
  //returning false stops the event from occuring, returning true allows it to happen
  return true;
});
