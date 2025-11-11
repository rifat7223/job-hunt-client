// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0cqA4Ym2YBqq7N0vvsatXqZDctvB_feg",
  authDomain: "job-hunt-4e210.firebaseapp.com",
  projectId: "job-hunt-4e210",
  storageBucket: "job-hunt-4e210.firebasestorage.app",
  messagingSenderId: "228498324923",
  appId: "1:228498324923:web:891a27e3e58d282845589e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);