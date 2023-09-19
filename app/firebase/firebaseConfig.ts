// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBZnjSCdLv98jeYeRrHA7Fm7msRwPQ9mXo',
  authDomain: 'fluenttalk-9538f.firebaseapp.com',
  projectId: 'fluenttalk-9538f',
  storageBucket: 'fluenttalk-9538f.appspot.com',
  messagingSenderId: '80525701402',
  appId: '1:80525701402:web:2b5d5b3136515a3011fca3',
  measurementId: 'G-0RY2G38QG7'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const storage = getStorage(app);