import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCgdhkQe_ySPbQRLRVyJTa2k69KpFSim4g",
  authDomain: "ecommerce-lamarite.firebaseapp.com",
  projectId: "ecommerce-lamarite",
  storageBucket: "ecommerce-lamarite.appspot.com",
  messagingSenderId: "901005488466",
  appId: "1:901005488466:web:b35b77064a5d511dce8a8b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)