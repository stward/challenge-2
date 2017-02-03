$( document ).ready(function() {
    console.log( "ready!" );

    function submitAnimal(e) {
      e.preventDefault();
      console.log("ABout to submit")
      $.ajax({
        url: '/post',
        method: 'POST',
        data: { }
      }).done(function (data) {
        console.log("Submittited", data);
        window.location = "/view";
      })
    }

    $("#newAnimalForm").on('click', submitAnimal);

});
