// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD94vqxfp5TmW8dHq5rSzzRSAlO00iCt8A",
  authDomain: "wlwcalendar.firebaseapp.com",
  projectId: "wlwcalendar",
  storageBucket: "wlwcalendar.firebasestorage.app",
  messagingSenderId: "716873011511",
  appId: "1:716873011511:web:202e092e7067f5d7160ab2",
  measurementId: "G-WZRLGY7BPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);