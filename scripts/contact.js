// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    let valid = true;
  
    // Clear error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";
  
    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
  
    // Validate name
    if (name === "") {
      document.getElementById("nameError").innerText = "Name is required.";
      valid = false;
    }
  // Validate email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("emailError").innerText = "Email is required.";
      valid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("emailError").innerText = "Invalid email format.";
      valid = false;
    }
  // Validate message
    if (message === "") {
      document.getElementById("messageError").innerText = "Message is required.";
      valid = false;
    } else if (message.length < 10) {
      document.getElementById("messageError").innerText = "Message must be at least 10 characters.";
      valid = false;
    }
  // Prevent form submission
    if (!valid) {
      e.preventDefault();
    }
  });
  