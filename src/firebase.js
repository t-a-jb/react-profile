

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

import { getStorage } from 'firebase/storage';
import { getFirestore, collection } from 'firebase/firestore';




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYNDkg2a5UMq8mtQOoIrK7vBvKsvfrzwg",
  authDomain: "jsdr09-portfolio-e3022.firebaseapp.com",
  projectId: "jsdr09-portfolio-e3022",
  storageBucket: "jsdr09-portfolio-e3022.appspot.com",
  messagingSenderId: "926397208827",
  appId: "1:926397208827:web:a6b7b609e7c675b3b4385e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export const storage = getStorage(app);
export const dbRef = collection(db, 'portfolio');

export const registerNewUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    const user = userCredential.user
    console.log(user);
})
.catch( (error) => {
    console.log(error.code);
    console.log(error.message);
});

export const signInWithEmail = (email, password) =>  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user
        console.log(user);
    })
    .catch( (error) => {
        console.log(error.code);
        console.log(error.message); 
});

export const signOutUser = () => signOut(auth)
.then (() => {
    console.log('Signed out');
})
.catch( (error) => {
    console.log(error.code);
    console.log(error.message); 
});




