var btnLogin = document.getElementById('do-login');
var idLogin = document.getElementById('login');
var username = document.getElementById('username');

btnLogin.onclick = function() {
  // Display the welcome message
  idLogin.innerHTML = '<p>We\'re happy to see you again, </p><h1>' + username.value + '</h1>';
  
  // Redirect to the home page after a short delay (e.g., 2 seconds)
  setTimeout(function() {
    window.location.href = 'index.html'; // Replace 'index.html' with the path to your home page
  }, 2000); // 2000 milliseconds = 2 seconds
}
