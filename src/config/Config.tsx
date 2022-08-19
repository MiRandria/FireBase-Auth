import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAAFVwfB6iSG02_-i0oTotSnXVVlbgi07k",
  authDomain: "react-firebase-auth-cb264.firebaseapp.com",
  projectId: "react-firebase-auth-cb264",
  storageBucket: "react-firebase-auth-cb264.appspot.com",
  messagingSenderId: "442832117490",
  appId: "1:442832117490:web:d2194adbf9a8647a85ba6b"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authentication = getAuth();
