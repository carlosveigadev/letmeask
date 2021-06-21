import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
 
const firebaseConfig = {
  apiKey: "AIzaSyCvFPznTJDLIGWwfMQ-Ru_go8skEmlILNY",
  authDomain: "letmeask-e9cf5.firebaseapp.com",
  databaseURL: "https://letmeask-e9cf5-default-rtdb.firebaseio.com",
  projectId: "letmeask-e9cf5",
  storageBucket: "letmeask-e9cf5.appspot.com",
  messagingSenderId: "154807155648",
  appId: "1:154807155648:web:771568ac7dd97256346625",
  measurementId: "G-7SL8FGM1H7"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();