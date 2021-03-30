import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCuX7ph-UPNeIATIQVvpHlN_FOtRlVz6Tc",
  authDomain: "react-firestore-596e8.firebaseapp.com",
  projectId: "react-firestore-596e8",
  storageBucket: "react-firestore-596e8.appspot.com",
  messagingSenderId: "994291805152",
  appId: "1:994291805152:web:eee5e5bcf18fc321135985",
  measurementId: "G-540GSTJ441",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
