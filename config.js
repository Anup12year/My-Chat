import firebase from 'firebase';
//import 'firebase/auth';
//import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDHP47kIt2DmmKDrFilP6ny1meaEN3oJBU",
  authDomain: "chatting-app-8da30.firebaseapp.com",
  projectId: "chatting-app-8da30",
  storageBucket: "chatting-app-8da30.appspot.com",
  messagingSenderId: "443196842261",
  appId: "1:443196842261:web:1012f12afc9f6fb434891c"
};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else{
  app = firebase.app()
}
const db = app.firestore();
const auth = firebase.auth();
export {db, auth};