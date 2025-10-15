import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Add Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCWUjAxu91j-RTVgereV4RgfDFQihvq--k",
  authDomain: "studyflow-209d3.firebaseapp.com",
  projectId: "studyflow-209d3",
  storageBucket: "studyflow-209d3.firebasestorage.app",
  messagingSenderId: "460826273577",
  appId: "1:460826273577:web:b6c932283475ee7b997938",
  measurementId: "G-3ZLSFGR0QH"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
