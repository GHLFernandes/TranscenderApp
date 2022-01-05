// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCopC3oyeMgfZlLqiFjWBd3GvCj-rDFce0",
    authDomain: "formal-triode-336015.firebaseapp.com",
    projectId: "formal-triode-336015",
    storageBucket: "formal-triode-336015.appspot.com",
    messagingSenderId: "839353697748",
    appId: "1:839353697748:web:63011be5c6672e04dc4241",
    measurementId: "G-B97WD5CC73"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const db = firebase.firestore();
const auth = firebase.auth();

export default { firebase, auth, db };