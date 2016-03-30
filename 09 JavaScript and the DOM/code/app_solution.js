function addElement() {

  var myDiv = document.getElementById('entry1');
  var lastP = document.getElementsByTagName('p')[1];


  //create an Element node
  var newP = document.createElement("p");

  //create a Text node
  newP.innerHTML = "Recently added!";

  // add the newly created element and its content into the DOM
  myDiv.insertBefore(newP, lastP);




  lastP.addEventListener('click', function(event) {
    event.stopPropagation();
    alert("i've been clicked");
  }, false);


  // window.addEventListener('click', function() {
  //   alert('window bubble');
  // });

  // window.addEventListener('click', function(){
  //   alert('window capture');
  // }, true);

}


/*  The load event fires at the end of the document loading process. At this point,
    all of the objects in the document are in the DOM, and all the images, scripts,
    links and sub-frames have finished loading.
*/
window.onload = addElement;


// need to have jquery for this to work
/*
$(function() {

  var lastP = $("p")[1];
  lastP.before("<p>Recently added!</p>");

  lastP.click(function() {
    alert("i've been clicked");
    $(this).unbind('click');
  });
});

*/
