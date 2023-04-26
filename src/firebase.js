// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "nreactfirebase.firebaseapp.com",
    databaseURL: "https://nreactfirebase-default-rtdb.firebaseio.com",
    projectId: "nreactfirebase",
    storageBucket: "nreactfirebase.appspot.com",
    messagingSenderId: "230308436801",
    appId: "1:230308436801:web:384c866707712b223edfc0",
    measurementId: "G-2HT7WLRQ7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);