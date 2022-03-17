import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBWMZy_avoGy98kySJiF7FOd2Z4FpXKDWQ",
  authDomain: "casacas-vallejo.firebaseapp.com",
  projectId: "casacas-vallejo",
  storageBucket: "casacas-vallejo.appspot.com",
  messagingSenderId: "305867252902",
  appId: "1:305867252902:web:396327bb3f7c835964c067",
  measurementId: "G-4L5XVM7SP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firestore
export const firestoreDb = getFirestore(app)