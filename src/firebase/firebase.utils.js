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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const {uid, displayName, email} = userAuth;
    const userRef = firestore.collection('users').doc(uid);
    const userSnapshot = await userRef.get();
    
    if (!userSnapshot.exists) {
        const createdAt = new Date();

        try {
            await userRef.set({displayName, email, createdAt, ...additionalData});
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
}

export default firebase;