const form = document.getElementById('myForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let hasError = false;


  if (usernameInput.value.trim() === '') {
    hasError = true;
    usernameInput.classList.add('error');
    document.getElementById('username_error').style.display = 'block';
  } else if (!/^[a-zA-Z ]+$/.test(usernameInput.value)) {
    hasError = true;
    usernameInput.classList.add('error');
    document.getElementById('username_error').style.display = 'block';
    document.getElementById('username_error').textContent = 'Username must only contain letters and spaces.';
  } else if (usernameInput.value.length < 4) {
    hasError = true;
    usernameInput.classList.add('error');
    document.getElementById('username_error').style.display = 'block';
    document.getElementById('username_error').textContent = 'Username must be at least 4 characters long.';
  } else {
    usernameInput.classList.remove('error');
    document.getElementById('username_error').style.display = 'none';
  }

  
  if (passwordInput.value.trim() === '') {
    hasError = true;
    passwordInput.classList.add('error');
    document.getElementById('pass_error').style.display = 'block';
  } else if (passwordInput.value.length < 8) {
    hasError = true;
    passwordInput.classList.add('error');
    document.getElementById('pass_error').style.display = 'block';
    document.getElementById('pass_error').textContent = 'Password must be at least 8 characters long!';
  } else {
    passwordInput.classList.remove('error');
    document.getElementById('pass_error').style.display = 'none';
  }

  
  if (hasError) {
    event.preventDefault(); 
  }
});

function switchToAdminLogin() {
  const adminLink = document.querySelector('a[onclick="switchToAdminLogin()"]');
  const form = document.getElementById('myForm');

  
  adminLink.style.display = 'none';

  

}
