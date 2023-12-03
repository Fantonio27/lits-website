// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBpBcDG_nUNhgBZlDFNOi203lzD8Ndd9Qg",
  authDomain: "lits-website.firebaseapp.com",
  databaseURL: "https://lits-website-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lits-website",
  storageBucket: "lits-website.appspot.com",
  messagingSenderId: "1053265796210",
  appId: "1:1053265796210:web:cffae65c7de3e7079236eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);