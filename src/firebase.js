import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDj-fA6z4auJ1d8ezpttWL8ZZlbdqao0M8",
    authDomain: "clone-3e354.firebaseapp.com",
    databaseURL: "https://clone-3e354.firebaseio.com",
    projectId: "clone-3e354",
    storageBucket: "clone-3e354.appspot.com",
    messagingSenderId: "932291064734",
    appId: "1:932291064734:web:ff6babeb0a346e29ca5c8f",
    measurementId: "G-97FMRKWVVW"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };