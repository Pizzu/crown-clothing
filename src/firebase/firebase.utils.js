import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyANX0qbz5IsvjK52NTihaLHAeWt568US3I",
    authDomain: "crown-clothing-db-d7493.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-d7493.firebaseio.com",
    projectId: "crown-clothing-db-d7493",
    storageBucket: "crown-clothing-db-d7493.appspot.com",
    messagingSenderId: "327122698343",
    appId: "1:327122698343:web:5029aadaa067b0a18954c2",
    measurementId: "G-R55F31KYYD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;