importScripts("https://www.gstatic.com/firebasejs/7.22.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.22.1/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyDsyzOHtQbgKMCcRWf6jCC13dP6Bque9wE",
    authDomain: "notification-22344.firebaseapp.com",
    databaseURL: "https://notification-22344.firebaseio.com",
    projectId: "notification-22344",
    storageBucket: "notification-22344.appspot.com",
    messagingSenderId: "1080267744612",
    appId: "1:1080267744612:web:ca83763f0c11f0004c0671"
});

firebase.messaging();