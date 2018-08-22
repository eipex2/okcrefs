import * as firebase from 'firebase';
require("firebase/firestore");

const prodConfig = {
  apiKey: "AIzaSyDahUMSw3ESK5IzP2EOLNfu74LZzEFFAwY",
  authDomain: "okcrefs-55fa1.firebaseapp.com",
  databaseURL: "https://okcrefs-55fa1.firebaseio.com",
  projectId: "okcrefs-55fa1",
  storageBucket: "okcrefs-55fa1.appspot.com",
  messagingSenderId: "934123383136"
};

const devConfig = {
  apiKey: "AIzaSyDahUMSw3ESK5IzP2EOLNfu74LZzEFFAwY",
  authDomain: "okcrefs-55fa1.firebaseapp.com",
  databaseURL: "https://okcrefs-55fa1.firebaseio.com",
  projectId: "okcrefs-55fa1",
  storageBucket: "okcrefs-55fa1.appspot.com",
  messagingSenderId: "934123383136"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const fs = firebase.firestore();

// const settings = {timestampsInSnapshots: true};
// fs.settings(settings);

const auth = firebase.auth();

export {
  db,
  fs,
  auth,
};