import * as firebase from 'firebase';

// FIREBASE CONFIG
const firebaseConfig = {
  apiKey: 'AIzaSyCmX9w46fobMBKRhdPe0tlzHHo4ITgnwTA',
  authDomain: 'devme-c0c33.firebaseapp.com',
  databaseURL: 'https://devme-c0c33.firebaseio.com',
  projectId: 'devme-c0c33',
  storageBucket: 'devme-c0c33.appspot.com',
  messagingSenderId: '757185712759',
  appId: '1:757185712759:web:cdea58d15379183c27ec72',
};

export const initializeFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const firebaseSignOut = async () => firebase.auth()
  .signOut();

export const firebaseSignIn = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

export const firebaseSignUp = (email, password) => firebase
  .auth()
  .createUserWithEmailAndPassword(email, password);
