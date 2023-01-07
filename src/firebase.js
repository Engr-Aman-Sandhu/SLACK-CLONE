// Import the functions you need from the SDKs you need
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js';
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js';

// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
// import 'firebase/storage';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'firebase/compat/storage';

// import { initializeApp } from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCvAMNkOZe85uLkstaknfQimWGxpQ9w6u8',
  authDomain: 'slack-clone-40c16.firebaseapp.com',
  databaseURL:
    'https://slack-clone-40c16-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'slack-clone-40c16',
  storageBucket: 'slack-clone-40c16.appspot.com',
  messagingSenderId: '778392929202',
  appId: '1:778392929202:web:d312060155566bab895aab',
  measurementId: 'G-V0CGC1RXGP',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const databaseRef = firebase.database().ref();
const storageRef = firebase.storage().ref();
export const slackRef = databaseRef.child('Slack-Clone');
export default firebase;
