$(document).ready(function() {
  // AJAX request to load gallery images
  $.ajax({
    url: 'gallery-data.json',
    dataType: 'json',
    success: function(data) {
      // Process the received data and populate the gallery section
      // using DOM manipulation or a template engine like Handlebars
    },
    error: function() {
      // Handle error if the AJAX request fails
    }
  });

  // AJAX request to submit the contact form
  $('#contact-form').submit(function(event) {
    event.preventDefault();
    var formData = $(this).serialize();
    
    $.ajax({
      url: 'contact-form-handler.php',
      type: 'POST',
      data: formData,
      success: function(response) {
        // Process the response from the server
        // Display success or error messages
      },
      error: function() {
        // Handle error if the AJAX request fails
      }
    });
  });
});
