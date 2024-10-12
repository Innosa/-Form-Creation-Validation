// Setup and Initial Code Structure

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // Form Submission and Event Prevention
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Input Retrieval and Trimming
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation Logic
    let isValid = true;
    const messages = [];

    // Username Validation
    if (username.length < 3) {
      isValid = false;
      messages.push("username must be atleast 3 character long.");
    }

    //  Email Validation
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push('Email must contain "@" and ".".');
    }

    // Password Validation
    if (password.length < 8) {
      isValid = false;
      messages.push("password must be atleast 8 characters long.");
    }

    // Feedback Display Logic
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful";
      feedbackDiv.style.display = "#28a745"; // Green color successful
    } else {
      feedbackDiv.innerHTML = message.join("<br>"); // Display error messages;
      feedbackDiv.style.color = "#dc3545"; // Error color
    }
  });
});
