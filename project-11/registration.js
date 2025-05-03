$(document).ready(function() {
    $("#myform").validate({
      rules: {
        fname: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 6
        }
      },
      messages: {
        fname: "Please enter your name",
        email: "Please enter a valid email address",
        password: "Password must be at least 6 characters long"
      }
    });
  });
  