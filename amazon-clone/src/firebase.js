// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAznjhE7exodeBjmdJVseJAV26h94Evxuw",
  authDomain: "clone-f6a2f.firebaseapp.com",
  projectId: "clone-f6a2f",
  storageBucket: "clone-f6a2f.appspot.com",
  messagingSenderId: "1072794169159",
  appId: "1:1072794169159:web:32ba9cff2a02fc51a8e662",
  measurementId: "G-GDN780KPNP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
