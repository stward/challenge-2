
//This should make a request to your animals api, and append each item
//to the HTML id list
(function(){
$.getJSON( "YOUR URL", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {

    items.push( "<li>" + val.SOMETHING + val.SOMETHING +"</li>" );
  });
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "#list" );
});
})();

//YOU WILL NEED TO WRITE AN AJAX POST METHOD WHICH WILL POST THE
//FORM CONTENTS TO THE APPROPRIATE URL