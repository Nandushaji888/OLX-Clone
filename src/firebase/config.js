import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG1ST_g3I2h917lCgyc4oGimT3fbx9XpY",
  authDomain: "olx-clone-ac6b5.firebaseapp.com",
  projectId: "olx-clone-ac6b5",
  storageBucket: "olx-clone-ac6b5.appspot.com",
  messagingSenderId: "596637042789",
  appId: "1:596637042789:web:3025ecff623552f6d05e8c",
  measurementId: "G-B51QJ9E1RJ",
};

 export default firebase.initializeApp(firebaseConfig);
