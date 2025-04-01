// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdQUsBXx8e4c2DhPVI6pvjS3OcDG6_ejU",
  authDomain: "radovinretreat.firebaseapp.com",
  databaseURL:
    "https://radovinretreat-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "radovinretreat",
  storageBucket: "radovinretreat.firebasestorage.app",
  messagingSenderId: "980173716410",
  appId: "1:980173716410:web:364da1b88df5344fa93b83",
  measurementId: "G-9DTMG0S157",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
