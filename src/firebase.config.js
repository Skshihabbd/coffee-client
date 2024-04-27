// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzSA5L3lje-_LiA3ymyJaF-r_mz6lwQsQ",
  authDomain: "coffeeshop-4c09c.firebaseapp.com",
  projectId: "coffeeshop-4c09c",
  storageBucket: "coffeeshop-4c09c.appspot.com",
  messagingSenderId: "362599456029",
  appId: "1:362599456029:web:2acc3380a23a353991d5f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
