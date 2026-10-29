const card = document.getElementById("card");
const body = document.getElementById("body");
const switchButton = document.getElementById("midBtn");
const toast = document.getElementById("toast");
let isRegister = false;
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
}

function toggleAuth() {
  isRegister = !isRegister;

  if (isRegister) {
    card.className = "card active-right";
    body.className = "show-register";
    switchButton.textContent = "Login";
    showToast("Switched to Registration");
  } else {
    card.className = "card active-left";
    body.className = "";
    switchButton.textContent = "Register";
    showToast("Switched to Login");
  }
}

function showButtonSuccess(button, successText, originalText, callback) {
  button.textContent = `✓ ${successText}`;
  button.style.background = "#2C3E50";
  showToast(successText === "Success" ? "Logged in successfully" : "Account created");

  setTimeout(() => {
    button.textContent = originalText;
    button.style.background = "";
    if (callback) callback();
  }, 1500);
}

document.getElementById("loginBtn").addEventListener("click", () => {
  showButtonSuccess(document.getElementById("loginBtn"), "Success", "Login");
});

document.getElementById("registerBtn").addEventListener("click", () => {
  showButtonSuccess(document.getElementById("registerBtn"), "Created", "Register", () => {
    if (isRegister) toggleAuth();
  });
});

switchButton.addEventListener("click", toggleAuth);
document.querySelector(".middle .bottom").addEventListener("click", () => {
  if (isRegister) toggleAuth();
});
document.getElementById("forgotBtn").addEventListener("click", () => {
  showToast("Check your email");
});

// This is a front-end demo only. Authentication and social login need a backend/provider.
document.querySelectorAll(".social").forEach((button) => {
  button.addEventListener("click", () => showToast("Social login is not connected yet"));
});
