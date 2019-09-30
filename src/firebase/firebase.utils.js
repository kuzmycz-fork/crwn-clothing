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

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
      const collectionRef = firestore.collection(collectionKey);

      const batch = firestore.batch();

      objectsToAdd.forEach( (obj) => {
          const newDocRef = collectionRef.doc();
          batch.set(newDocRef, obj);
      });

      return await batch.commit();

  };

  export const convertCollectionsSnapshotToMap = ( collections ) => {
      const transformedCollection = collections.docs.map(doc => {
          const { title, items } = doc.data();

          return {
              routeName: encodeURI(title.toLowerCase()),
              id: doc.id,
              title,
              items
          };
      });

      return transformedCollection.reduce((accumulator, collection) => {
          accumulator[collection.title.toLowerCase()] = collection;

          return accumulator;
      }, {});
  };

  export const getCurrentUser = () => {
      return new Promise((resolve, reject) => {
          const unsubscribe = auth.onAuthStateChanged((userAuth) => {
              unsubscribe();
              resolve(userAuth);
          }, reject)
      })
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();

  googleProvider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;