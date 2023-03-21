// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrtH6Qajw348Qzv4Urz9OSrrSmr6b84yM",
  authDomain: "dos-auth-26e96.firebaseapp.com",
  projectId: "dos-auth-26e96",
  storageBucket: "dos-auth-26e96.appspot.com",
  messagingSenderId: "1055880695102",
  appId: "1:1055880695102:web:f15713954c3f68b370706f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const signUp_button = document.querySelector("#signup-button");
const logIn_button = document.querySelector("#login-button");

// Signup function
function signup() {
  var email = document.getElementById("signup-email").value;
  var password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(function (userCredential) {
      // Sign up successful
      const user = userCredential.user;
      console.log("User signed up:", user);
      alert("Signup successful!");
    })
    .catch(function (error) {
      // Sign up failed
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("Error signing up:", errorMessage);
      document.getElementById("signup-error").innerHTML = errorMessage;
    });
}

// Login function
function login() {
  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(function (userCredential) {
      // Login successful
      var user = userCredential.user;
      console.log("Logged in as:", user.email);
      // Redirect to dashboard or homepage
      window.location.href = "dashboard.html";
    })
    .catch(function (error) {
      // Handle errors
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode, errorMessage);
      document.getElementById("login-error").innerHTML = errorMessage;
    });
}
signUp_button.addEventListener("click", signup);
logIn_button.addEventListener("click", login);
