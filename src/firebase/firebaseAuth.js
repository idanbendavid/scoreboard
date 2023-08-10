import { auth } from "./firebaseConfig";
import { connectAuthEmulator, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

connectAuthEmulator(auth, "http://localhost:9099")

export function createFirebaseUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential, "register")
            const user = userCredential.user;
            return user;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
}

export function signInFirebase(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            // console.log(userCredential._tokenResponse, "log in")
            console.log(userCredential, "log in")
            const user = userCredential.user;
            return user;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
}

export function getUserFirebaseState() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            console.log(user)
            const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
}
