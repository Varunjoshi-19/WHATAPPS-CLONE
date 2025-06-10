import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCk_83IIREPKImTrSl615F1l41F_hwzYfc",
    authDomain: "whatapp-clone-cd7dd.firebaseapp.com",
    projectId: "whatapp-clone-cd7dd",
    storageBucket: "whatapp-clone-cd7dd.firebasestorage.app",
    messagingSenderId: "120274803686",
    appId: "1:120274803686:web:faa80e109330c2fa8a9427",
    measurementId: "G-EPR17PB19L"
  };


const app = initializeApp(firebaseConfig);
export const firbaseAuth = getAuth(app);