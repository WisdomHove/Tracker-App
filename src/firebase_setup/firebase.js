import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClZ3twDDiLYQJbwzD8AvTjrfkkJ2e7Ny4",
  authDomain: "chat-85a22.firebaseapp.com",
  databaseURL: "https://chat-85a22.firebaseio.com",
  projectId: "chat-85a22",
  storageBucket: "chat-85a22.appspot.com",
  messagingSenderId: "1022388669829",
  appId: "1:1022388669829:web:74392c59c6108e8e5188ec",
  measurementId: "G-TDQY5QLHZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);
