import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD-RJrCSDjKsercHmcsgAql7mx6rIIpVd8",
  authDomain: "coderhouse-ecomerces.firebaseapp.com",
  projectId: "coderhouse-ecomerces",
  storageBucket: "coderhouse-ecomerces.firebasestorage.app",
  messagingSenderId: "27231175374",
  appId: "1:27231175374:web:22f4062a897e91b092469f"
};

export const app = initializeApp(firebaseConfig);