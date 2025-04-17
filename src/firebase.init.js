// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1I0q9NyTlaPSWVbSMnBXtLNkk9urd5CE",
  authDomain: "auth-er-moha-milon-e03e6.firebaseapp.com",
  projectId: "auth-er-moha-milon-e03e6",
  storageBucket: "auth-er-moha-milon-e03e6.firebasestorage.app",
  messagingSenderId: "1000356746228",
  appId: "1:1000356746228:web:a78c2e7ce37d030cdf1fa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);