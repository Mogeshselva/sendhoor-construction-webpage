$(document).ready(function () {
  $("#contact-form").validate({
    rules: {
      fullname: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      textarea: {
        required: true,
        minlength: 10,
      },
    },
    messages: {
      fullname: {
        required: "Enter a name",
      },
      email: {
        required: "Enter a valid email",
        email: "Please enter a valid email format",
      },
      textarea: {
        required: "Please enter your message",
        minlength: "Message must be at least 10 characters long",
      },
    },
    errorElement: "div",
    errorClass: "text-danger fade-in-error", // we'll animate this
    highlight: function (element) {
      $(element).addClass("is-invalid");
    },
    unhighlight: function (element) {
      $(element).removeClass("is-invalid");
    },
    errorPlacement: function (error, element) {
      error.hide().insertAfter(element).fadeIn(400);
    }
  });
});
