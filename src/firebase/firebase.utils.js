import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAz25xJziNWmikXrA26j7GhG9wpusw6sUw",
    authDomain: "crwn-db-c7ea1.firebaseapp.com",
    databaseURL: "https://crwn-db-c7ea1.firebaseio.com",
    projectId: "crwn-db-c7ea1",
    storageBucket: "",
    messagingSenderId: "324016107808",
    appId: "1:324016107808:web:2b40a7e800a50e15ca2745"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;