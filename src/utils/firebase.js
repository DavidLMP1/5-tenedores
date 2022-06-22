// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaX8jUZ3PIHOshJpaqJ00QeoLe12L6hl0",
  authDomain: "tenedores-d1663.firebaseapp.com",
  projectId: "tenedores-d1663",
  storageBucket: "tenedores-d1663.appspot.com",
  messagingSenderId: "482611958193",
  appId: "1:482611958193:web:2933f164f70f3365f9ad90",
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);
