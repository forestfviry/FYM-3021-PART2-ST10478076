document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const enquiryForm = document.getElementById("enquiryForm");

  // Regex patterns
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valid email
  const phonePattern = /^\+?\d{9,15}$/; // Accepts optional +, 9-15 digits

  function validateForm(form) {
    let valid = true;

    // Email validation
    const emailInput = form.querySelector("input[type='email']");
    if (emailInput && !emailPattern.test(emailInput.value)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      valid = false;
      return valid;
    }

    // Phone validation
    const phoneInput = form.querySelector("input[type='tel']");
    if (phoneInput && !phonePattern.test(phoneInput.value)) {
      alert("Please enter a valid phone number (digits only, optional +).");
      phoneInput.focus();
      valid = false;
      return valid;
    }

    // Message/Details validation
    const messageInput = form.querySelector("textarea");
    if (messageInput && messageInput.value.length < 20) {
      alert("Message must be at least 20 characters.");
      messageInput.focus();
      valid = false;
      return valid;
    }

    // Optional: Date validation
    const dateInput = form.querySelector("input[type='date']");
    if (dateInput && !dateInput.value) {
      alert("Please select a date.");
      dateInput.focus();
      valid = false;
      return valid;
    }

    return valid;
  }

  // Attach validation to both forms
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      if (!validateForm(contactForm)) e.preventDefault();
    });
  }

  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
      if (!validateForm(enquiryForm)) e.preventDefault();
    });
  }
});
