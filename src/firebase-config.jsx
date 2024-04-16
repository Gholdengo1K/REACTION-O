// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authAIzaSyDCaK9HILvmhdlNf29VSjFcKK_4hZHEc6UDomain: "reaction-bfafe.firebaseapp.com",
  projectId: "reaction-bfafe",
  storageBucket: "reaction-bfafe.appspot.com",
  messagingSenderId: "68974843081",
  appId: "1:68974843081:web:190f2e3d7f698380e62918",
  measurementId: "G-THJ1S25GFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);