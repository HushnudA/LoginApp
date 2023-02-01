// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbnuvO-mQwfdKeIRoPS8vAE5yBdMqMcos",
    authDomain: "login-6999d.firebaseapp.com",
    projectId: "login-6999d",
    storageBucket: "login-6999d.appspot.com",
    messagingSenderId: "794439361067",
    appId: "1:794439361067:web:f351245fabcd2b7f54806e"
};

// Initialize Firebase
app = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export { auth };