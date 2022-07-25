import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKV8x-XXsyBe9CzdRnG0ey-jnQ1rstpL8",
  authDomain: "unsplash-62f87.firebaseapp.com",
  projectId: "unsplash-62f87",
  storageBucket: "unsplash-62f87.appspot.com",
  messagingSenderId: "967864913986",
  appId: "1:967864913986:web:edc9c40dd2ef70cf0f9ddb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)