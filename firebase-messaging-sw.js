importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');
firebase.initializeApp({apiKey:"AIzaSyDUsThsXcfoKojRE3mj6_DYRG5ifSVZhCg",authDomain:"akanchik-id.firebaseapp.com",databaseURL:"https://akanchik-id-default-rtdb.europe-west1.firebasedatabase.app",projectId:"akanchik-id",storageBucket:"akanchik-id.firebasestorage.app",messagingSenderId:"1096469011879",appId:"1:1096469011879:web:2badb039e6d0d31cb02a82"});
const messaging = firebase.messaging();
messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/logo.gif'
  });
});
