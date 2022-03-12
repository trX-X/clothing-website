import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyAV93MajrCfc9QOrhqblAal52m6NpM7rD0',
  authDomain: 'clothing-db-f5edf.firebaseapp.com',
  projectId: 'clothing-db-f5edf',
  storageBucket: 'clothing-db-f5edf.appspot.com',
  messagingSenderId: '573497696623',
  appId: '1:573497696623:web:0531cb8f6788f11781089a',
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date()
    try{
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch(() => {});

export default firebase;
