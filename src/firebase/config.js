
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDpKR6u0ZB0Y755BIoFmJzkPUjKa1_FH4E",
  authDomain: "ecommerce-react-coderhou-4a1a7.firebaseapp.com",
  projectId: "ecommerce-react-coderhou-4a1a7",
  storageBucket: "ecommerce-react-coderhou-4a1a7.appspot.com",
  messagingSenderId: "540070812195",
  appId: "1:540070812195:web:505eaf7f2fb0c8b4f26f96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  getFirestoreApp = ()=>{
    return app
}