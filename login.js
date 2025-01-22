
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4BOs3e3jQJX16568tz6YiV02aH-DJoUk",
  authDomain: "doglovershub-f167d.firebaseapp.com",
  projectId: "doglovershub-f167d",
  storageBucket: "doglovershub-f167d.firebasestorage.app",
  messagingSenderId: "573939341026",
  appId: "1:573939341026:web:77a67d5221f19918b2f0bb",
  measurementId: "G-6CH39FEYEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
//inputs
const email = document.getElementById("email-input").value;
const password = document.getElementById("password-input").value;

//submit button
const submit = document.getElementById("submit-input");
submit.addEventListener("click", function (event) {
  event.preventDefault()


  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("Creating Account...")
      window.location.href = "Grand.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });

})

