let emailInput = document.getElementById("emailInput");
let password = document.getElementById("passwordInput");
let eyeicon = document.querySelector(".showPasswordButton");
let isPasswordVisible = false;

eyeicon.onclick = function () {
  if (isPasswordVisible) {
    password.type = "password";
    eyeicon.innerHTML = '<img src="imgs/eye.png" alt="">';
  } else {
    password.type = "text";
    eyeicon.innerHTML = '<img src="imgs/hide.png" alt="">';
  }
  isPasswordVisible = !isPasswordVisible;
};

const humanVerifyButton = document.querySelector(".humanVerifyBtn");

humanVerifyButton.addEventListener("click", () => {
  humanVerifyButton.innerHTML = '<img src="imgs/icons8-check-48.png" alt="">';
});

const loginButton = document.querySelector(".loginButton");

loginButton.addEventListener("click", () => {
  let passwordInputValue = password.value;
  let emailValue = emailInput.value;

  if (passwordInputValue && emailValue !== "") {
    window.location.href = "https://www.youtube.com/";
  }
});

