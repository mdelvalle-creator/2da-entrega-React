import * as firebase from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyAwSebSMpkvBzy3SDPYTiOqOtzVsjHjPTc",
  authDomain: "strangestore-a6fa4.firebaseapp.com",
  projectId: "strangestore-a6fa4",
  storageBucket: "strangestore-a6fa4.appspot.com",
  messagingSenderId: "37762681399",
  appId: "1:37762681399:web:a76bf03a0cef7e37428db2",
  measurementId: "G-HBMG68CTZW"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
    return app;
}

export function getCurrentFirestore() {
    return getFirestore(app);
};
