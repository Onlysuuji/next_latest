// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk0iKVDCHX-mRktoagf1bs0Zunk-DTj-s",
  authDomain: "onlysuuji.firebaseapp.com",
  projectId: "onlysuuji",
  storageBucket: "onlysuuji.firebasestorage.app",
  messagingSenderId: "286388702109",
  appId: "1:286388702109:web:527c980373935000803d74",
  measurementId: "G-746M3K3LHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);