import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAVY8E_DZDmc5MYfuaJPPF1RAySWS1HN-w",
  authDomain: "food-9b984.firebaseapp.com",
  projectId: "food-9b984",
  storageBucket: "food-9b984.appspot.com",
  messagingSenderId: "663347810591",
  appId: "1:663347810591:web:3d6b245bfdd705a0af202a",
  measurementId: "G-J6606DDBGS"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);