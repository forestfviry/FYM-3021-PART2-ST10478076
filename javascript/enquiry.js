document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('enquiryForm');
  var popup = document.getElementById('successPopup');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stay on page

    // Optional: get form data
    var formData = new FormData(form);
    var data = {};
    formData.forEach(function(value, key) {
      data[key] = value;
    });
    console.log("Form submitted:", data); // logs the form data in console

    // Show success popup
    popup.classList.add('show');

    // Hide popup and reset form after 4 seconds
    setTimeout(function() {
      popup.classList.remove('show');
      form.reset();
    }, 4000);
  });
});
