/* global getAuth, createUserWithEmailAndPassword */


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAWszK4oRbRrbYw8ovuN5-BtxX9KX6Cn_A",
    authDomain: "demo2-9674d.firebaseapp.com",
    projectId: "demo2-9674d",
    storageBucket: "demo2-9674d.appspot.com",
    messagingSenderId: "328838918749",
    appId: "1:328838918749:web:96951168421e2abd3dd3b4",
    measurementId: "G-4F4PN6TTB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app,auth };