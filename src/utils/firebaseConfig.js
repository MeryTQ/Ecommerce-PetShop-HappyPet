import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDt-jqsSTB08IwhDkxEQ2QpuVE6QmNsekQ",
  authDomain: "happy-pet-ecommerce---react.firebaseapp.com",
  projectId: "happy-pet-ecommerce---react",
  storageBucket: "happy-pet-ecommerce---react.appspot.com",
  messagingSenderId: "668236504003",
  appId: "1:668236504003:web:2c62ab47df729dad8fbb76"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);