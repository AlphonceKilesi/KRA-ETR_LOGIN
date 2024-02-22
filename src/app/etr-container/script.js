const form = document.getElementById('myForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const adminLink = document.querySelector('.forgot-Password a:first-child');

// Form validation
form.addEventListener('submit', function(event) {
  let hasError = false;

  // Username validation
  if (usernameInput.value.trim() === '') {
    hasError = true;
    // Add error message for empty username
  } else if (!/^[a-zA-Z ]+$/.test(usernameInput.value)) {
    hasError = true;
    // Add error message for invalid username format (not just letters and spaces)
  }

  // Password validation
  if (passwordInput.value.trim() === '') {
    hasError = true;
    // Add error message for empty password
  } else if (passwordInput.value.length < 8) {
    hasError = true;
    // Add error message for password less than 8 characters
  }

  // ... (add additional checks if needed)

  if (hasError) {
    event.preventDefault();
    // Highlight error fields or display a general error message
  }
});

// Hide admin link on click
adminLink.addEventListener('click', function() {
  adminLink.style.display = 'none';
});
