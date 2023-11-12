$(document).ready(function () {
    $("form").submit(function (event) {
      var formData = {
        name: $("#name").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        date: $("#datepicker").val(),
        service: $("#service").val(),
        comments: $("#comments").val(),
      };
  
      $.ajax({
        type: "POST",
        url: "https://djztelzvs7.execute-api.us-east-2.amazonaws.com/formulario/formulario",
        data: formData,
        crossDomain: true,
        dataType: 'json',
        headers: {"x-api-key": "SDImgXTOWV3dDkjGdo7DT9c42LafhHuFaADZQrGN"},
        success: function(data){
          console.log(data);
        },
        error: function(data){
          console.log(data);
        }
      })
    });
  });