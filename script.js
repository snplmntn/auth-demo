const to_signup_button = document.querySelector(".to-signup-button");
const to_login_button = document.querySelector(".to-login-button");
const signupContainer = document.querySelector(".container-signup");
const loginContainer = document.querySelector(".container-login");

const login_signup = function () {
  console.log("idk");
  signupContainer.classList.toggle("hidden");
  loginContainer.classList.toggle("hidden");
};

to_signup_button.addEventListener("click", login_signup);
to_login_button.addEventListener("click", login_signup);
