import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCkaA4MeckttSaakTd6V7xz2WpItJfY54c',
  authDomain: 'instagram-clone-f5550.firebaseapp.com',
  databaseURL: 'https://instagram-clone-f5550.firebaseio.com',
  projectId: 'instagram-clone-f5550',
  storageBucket: 'instagram-clone-f5550.appspot.com',
  messagingSenderId: '393486933623',
  appId: '1:393486933623:web:1d7746e1ed7b58df4c3072',
  measurementId: 'G-7369YP1185',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
export default firebase;
