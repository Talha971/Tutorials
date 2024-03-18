import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB60mgv-ewOtqp19cJTHlvNsZsHk1QUz50",
    authDomain: "react-app-a98c8.firebaseapp.com",
    projectId: "react-app-a98c8",
    storageBucket: "react-app-a98c8.appspot.com",
    messagingSenderId: "265205939755",
    appId: "1:265205939755:web:f1a4bc535a5d30a88db46e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { app, auth, createUserWithEmailAndPassword }