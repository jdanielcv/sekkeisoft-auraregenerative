$(document).ready(function () {
    $("form").submit(function (event) {
      var formData = {
        name: $("#name").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        service: $("#service").val(),
        date: $("#datepicker").val(),
        comments: $("#comments").val(),
      };
  
      $.ajax({
        type: "POST",
        url: "http://127.0.0.1:8000/api/v1/email/aura",
        data: JSON.stringify(formData),
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
      });
      if (!data.success) {
        if (data.errors.name) {
          $("#name-group").addClass("has-error");
          $("#name-group").append(
            '<div class="help-block">' + data.errors.name + "</div>"
          );
        }

        if (data.errors.email) {
          $("#email-group").addClass("has-error");
          $("#email-group").append(
            '<div class="help-block">' + data.errors.email + "</div>"
          );
        }

        if (data.errors.phone) {
            $("#phone-group").addClass("has-error");
            $("#phone-group").append(
              '<div class="help-block">' + data.errors.phone + "</div>"
            );

            
          }

        if (data.errors.message) {
          $("#message-group").addClass("has-error");
          $("#message-group").append(
            '<div class="help-block">' + data.errors.message + "</div>"
          );
        }
      } else {
        $("form").html(
          '<div class="alert alert-success">' + data.message + "</div>"
        );
      }
  
      event.preventDefault();
    });
  });