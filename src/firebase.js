// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASCiRsXp0YM4KQlLr_RYP7CFyfI4zQs3Q",
  authDomain: "netflix-clone-1357c.firebaseapp.com",
  projectId: "netflix-clone-1357c",
  storageBucket: "netflix-clone-1357c.appspot.com",
  messagingSenderId: "966916977297",
  appId: "1:966916977297:web:d5db2479038043d64b4530"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();


export {auth}
export default db
