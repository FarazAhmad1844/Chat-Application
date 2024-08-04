// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import constants from 'expo-constants';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: constants.manifest.extra.apiKey,
  authDomain: constants.manifest.extra.authDomain,
  projectId:  constants.manifest.extra.productId,
  storageBucket:  constants.manifest.extra.storageBucket,
  messagingSenderId:  constants.manifest.extra.messagingSenderId,
  appId:  constants.manifest.extra.apiKey
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();