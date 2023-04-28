// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW8ai4ruam6CpYaD4mMwiR2aWZax03MJ8",
  authDomain: "gallery-app-93e9e.firebaseapp.com",
  projectId: "gallery-app-93e9e",
  storageBucket: "gallery-app-93e9e.appspot.com",
  messagingSenderId: "136097263267",
  appId: "1:136097263267:web:a602aff3ef1c466e2c5916"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);