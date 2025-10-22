
const USER = "123";
const PASS = "123";

const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que se recargue la página

  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;

  if (usernameInput === USER && passwordInput === PASS) {
    window.location.href = 'api_page.html';
  } else {
    message.textContent = "Usuario o contraseña incorrectos.";
    message.className = "error";
  }
});
