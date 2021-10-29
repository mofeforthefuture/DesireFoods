// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBGJC4Y_Py5UhavC9VRgEI0_7tU7OAekgY',
  authDomain: 'desirefoods.firebaseapp.com',
  projectId: 'desirefoods',
  storageBucket: 'desirefoods.appspot.com',
  messagingSenderId: '638284666519',
  appId: '1:638284666519:web:c1a2b9dfa6e35264df3bd2',
  measurementId: 'G-BTYQ7C2E1Z',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app;
}
const auth = firebase.auth();

export {auth};
