(function(){
$.getJSON( "http://localhost:3000/api/blogs", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
  	console.log(key, val)
  	console.log(val.title);
  	console.log(val.body);
    items.push( "<li title='" + val.title + "' id='" + val.title + "'>" + val.title + val.body +"</li>" );
  });
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "#blog-list" );
});
})();