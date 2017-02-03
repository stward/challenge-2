$( document ).ready(function() {
    console.log( "ready!" );

    function submitAnimal(e) {
      e.preventDefault();
      var name = $("#animalName").val();
      var species = $("#animalSpecies").val();
      var color = $("#animalColor").val();
      console.log("ABout to submit")
      $.ajax({
        url: '/post',
        method: 'POST',
        data: {
          name: name,
          species: species,
          color: color
        }
      }).done(function (data) {
        console.log("Submittited", data);
        window.location = "/view";
      })
    }

    $("#newAnimalForm").on('click', submitAnimal);

});
