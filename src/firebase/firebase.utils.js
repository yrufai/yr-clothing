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

export const createUserProfileDocument = async (userAuth, otherData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
