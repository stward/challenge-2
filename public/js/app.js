$( document ).ready(function() {
    console.log( "ready!" );

    function submitAnimal(e) {
      e.preventDefault();
      var name = $('#name').val();
      var species = $('#species').val();
      var color = $('#color').val();

      console.log("About to submit")
      $.ajax({
        url: 'post',
        method: 'POST',
        data: {
          name: name,
          species: species,
          color: color
        }
      }).done(function (data) {
        console.log("Submittited", data);
        window.location = "/";
      })
    }

    $("#newAnimalForm").on('click', submitAnimal);

});
