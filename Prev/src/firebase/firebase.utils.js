import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD8mrYJbLPJ8wa6cK_Xyt6mLJBUz7kwPcE",
    authDomain: "crwn-db-5583b.firebaseapp.com",
    projectId: "crwn-db-5583b",
    storageBucket: "crwn-db-5583b.appspot.com",
    messagingSenderId: "489844892010",
    appId: "1:489844892010:web:7c83823803691ee69c4513"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await  userRef.get();

    if(!snapShot.exists) {
      const { displayName, email} = userAuth;
      const createAt = Date();

      try {
        await userRef.set({
          displayName,
          email,
          createAt,
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
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

  