
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey:"AIzaSyDUsThsXcfoKojRE3mj6_DYRG5ifSVZhCg",
  authDomain:"akanchik-id.firebaseapp.com",
  databaseURL:"https://akanchik-id-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:"akanchik-id",
  storageBucket:"akanchik-id.firebasestorage.app",
  messagingSenderId:"1096469011879",
  appId:"1:1096469011879:web:2badb039e6d0d31cb02a82"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log('[SW] Background', payload);
  const data = payload.data || {};
  const title = data.title || payload.notification?.title || 'Under';
  const options = {
    body: data.body || payload.notification?.body || 'Новое уведомление',
    icon: data.avatar && data.avatar.startsWith('http') ? data.avatar : 'https://akanchik-id.github.io/logo.png',
    badge: 'https://akanchik-id.github.io/logo.png',
    data: data
  };
  return self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const data = event.notification.data || {};
  let url = '/';
  if(data.chatId) url = `/?chat=${data.chatId}`;
  else if(data.postId) url = `/?post=${data.postId}`;
  event.waitUntil(clients.openWindow(url));
});
