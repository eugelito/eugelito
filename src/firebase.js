import firebase from "firebase";
import { initializeApp } from 'firebase/app'

// Initialize Firebase
var firebaseApp = firebase.initializeApp({
  // Your web app's Firebase configuration
  apiKey: "AIzaSyBEySslQokTGZVo2QMbXdJfh4Cj1Dn-TYg",
  authDomain: "eugelito-38fcf.firebaseapp.com",
  projectId: "eugelito-38fcf",
  storageBucket: "eugelito-38fcf.appspot.com",
  messagingSenderId: "168178190892",
  appId: "1:168178190892:web:9539ac4f300fb16a059f89",
});

var db = firebaseApp.firestore();

export { db };