import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMpiLcnICov_djU4I169UBVH408DP0bRw",
  authDomain: "quantumkrypto-e3d82.firebaseapp.com",
  projectId: "quantumkrypto-e3d82",
  storageBucket: "quantumkrypto-e3d82.appspot.com",
  messagingSenderId: "853654177790",
  appId: "1:853654177790:web:6a86332ca06ca668fde2af",
  measurementId: "G-7KSVLFND79",
  databaseURL: "https://quantumkrypto-e3d82-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);
