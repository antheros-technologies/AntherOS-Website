importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDLVC8hrEetd8ww2YvD7_A-4pHfcHO6i38",
  authDomain: "anther-website.firebaseapp.com",
  projectId: "anther-website",
  storageBucket: "anther-website.firebasestorage.app",
  messagingSenderId: "43177825449",
  appId: "1:43177825449:web:6683453fba0359de4585b8"
});

const messaging = firebase.messaging();
