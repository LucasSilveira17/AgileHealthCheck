import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5NEUSokqv9KQd4rdViVDeNOaJvtQx2Ro",
  authDomain: "esperanca-f0b9b.firebaseapp.com",
  projectId: "esperanca-f0b9b",
  storageBucket: "esperanca-f0b9b.appspot.com",
  messagingSenderId: "463963891859",
  appId: "1:463963891859:web:67e5d7fa207480a0d08566",
  measurementId: "G-ZWXV98JF18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
