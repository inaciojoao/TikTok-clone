import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"



const firebaseConfig = {
  apiKey: "AIzaSyBKEgGOF08I5WeSqe-4Q9lYX6anYsjB178",
  authDomain: "clonetiktok-jornadadev.firebaseapp.com",
  projectId: "clonetiktok-jornadadev",
  storageBucket: "clonetiktok-jornadadev.appspot.com",
  messagingSenderId: "548270800296",
  appId: "1:548270800296:web:d4f3478c704fcb311d319d"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;
