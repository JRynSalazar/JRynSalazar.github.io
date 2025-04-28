function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
  
    const validUsername = "admin";
    const validPassword = "1234";
  
    if (username === validUsername && password === validPassword) {
      message.textContent = "Login successful!";
      message.className = "success";
      window.location.href = "home.html";
    } else {
      message.textContent = "Invalid username or password.";
      message.className = "error";
    }
  }
  