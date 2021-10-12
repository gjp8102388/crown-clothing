import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDN1ID1PtSjAmvCdECiTGpJVTPB8th5uHk",
  authDomain: "crwn-db-bae09.firebaseapp.com",
  projectId: "crwn-db-bae09",
  storageBucket: "crwn-db-bae09.appspot.com",
  messagingSenderId: "679906304402",
  appId: "1:679906304402:web:58d29193868a4b3c3f614b",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
