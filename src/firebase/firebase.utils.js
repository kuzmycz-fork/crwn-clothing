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

  export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;