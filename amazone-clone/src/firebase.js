
import firebase from 'firebase'

const firabseApp = firebase.initializeApp({
  apiKey: "AIzaSyAq_JwYUWDo5cnWskjJIbEbqqY1v22QMHY",
  authDomain: "e-clone-6a000.firebaseapp.com",
  projectId: "e-clone-6a000",
  storageBucket: "e-clone-6a000.appspot.com",
  messagingSenderId: "899692805360",
  appId: "1:899692805360:web:efa038232ee0a61a21d635"
});
const db = firabseApp.firestore();
const auth = firabseApp.auth();

export {db,auth};
