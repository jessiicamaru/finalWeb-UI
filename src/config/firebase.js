// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyArRurmooaF1KotMpbHUgPP2haIUDqUaCs',
    authDomain: 'railway-ticket-22794.firebaseapp.com',
    projectId: 'railway-ticket-22794',
    storageBucket: 'railway-ticket-22794.firebasestorage.app',
    messagingSenderId: '1000812081531',
    appId: '1:1000812081531:web:3e54c50e81e575072e8dde',
    measurementId: 'G-BJF9VLMQ92',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
