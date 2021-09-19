import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics';

const app = firebase.initializeApp({
    apiKey: "AIzaSyALP1w79SzTBIgXvZrHJrcxQL0PoyUpPS4",
    authDomain: "instagram-dev-e8013.firebaseapp.com",
    projectId: "instagram-dev-e8013",
    storageBucket: "instagram-dev-e8013.appspot.com",
    messagingSenderId: "827302706073",
    appId: "1:827302706073:web:a49ccf94a14ae3d1843108",
    measurementId: "G-LRNRFG4L8Q"
})

const auth = app.auth();
const db = app.firestore();
const storage = app.storage();
const analytics = app.analytics();

export {db, auth, storage, analytics}