import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const Config = {
  apiKey: "AIzaSyBQZNX4ZovZCJCiRiIzwr1zcjpmgm-YGb8",
  authDomain: "yr-clothing.firebaseapp.com",
  databaseURL: "https://yr-clothing.firebaseio.com",
  projectId: "yr-clothing",
  storageBucket: "yr-clothing.appspot.com",
  messagingSenderId: "577917917720",
  appId: "1:577917917720:web:4b11ba3c5257a9e346416d",
  measurementId: "G-1QC0Q4QYEV",
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
