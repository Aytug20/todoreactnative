import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC_jhBWjm5_vPZB1lXq_yJxJ6NM5Ctv8XA",
  authDomain: "todonativeapp-ff098.firebaseapp.com",
  projectId: "todonativeapp-ff098",
  storageBucket: "todonativeapp-ff098.appspot.com",
  messagingSenderId: "358473995758",
  appId: "1:358473995758:web:184db6130dbdec0f48eaff",
  measurementId: "G-7PYJQPZ4SB"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();


  export {
    auth,
  }