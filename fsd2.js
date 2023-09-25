// Function to check if a field is empty (including spaces)
function isEmpty(fieldValue) {
  return fieldValue.trim() === "";
}

// Function to validate the password
function validatePassword(password) {
  // Password must be at least 7 characters long
  if (password.length < 7) {
      return false;
  }

  // Password must contain at least one capital letter
  if (!/[A-Z]/.test(password)) {
      return false;
  }

  // Password must contain at least one digit
  if (!/\d/.test(password)) {
      return false;
  }

  // Password must contain at least one special character from the set (&,$,#@)
  if (!/[&$#@]/.test(password)) {
      return false;
  }

  // If all conditions pass, the password is valid
  return true;
}

// Function to validate an email address using a regular expression
function validateEmail(email) {
  // Regular expression pattern for email validation
  var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/;

  return emailPattern.test(email);
}

// Function to handle form submission
function handleSubmit(event) {
  // Get references to the form fields
  var fullNameInput = document.getElementById("fullName");
  var passwordInput = document.getElementById("password");
  var mobNumInput = document.getElementById("mobNum");
  var emailInput = document.getElementById("email");
  var dobInput = document.getElementById("dob");

  // Check if any of the fields are empty (including spaces)
  if (isEmpty(fullNameInput.value) || isEmpty(passwordInput.value) || isEmpty(mobNumInput.value) || isEmpty(dobInput.value)) {
      event.preventDefault();
      alert("Fields should not be empty.");
      return;
  }

  // Validate the email address format
  if (!validateEmail(emailInput.value)) {
      event.preventDefault();
      alert("Invalid email address format.");
      return;
  }

  // Validate the password format
  if (!validatePassword(passwordInput.value)) {
      event.preventDefault();
      alert("Invalid password. Password must be at least 7 characters long and contain at least one capital letter, one digit, and one special character from the set (&,$,#@).");
  }
}

// Add an event listener to the form to handle submission
document.getElementById("phoneform").addEventListener("submit", handleSubmit);
