import { initializeApp } from "firebase/app";

const keyApi = process.env.KEY_API
const dominio = process.env.KEY_DOMINIO
const msj = process.env.KEY_MSJ
const id =  process.env.KEY_ID

const firebaseConfig = {
  apiKey: keyApi,
  authDomain: dominio,
  projectId: "challengue-greydive-a0b84",
  storageBucket: "challengue-greydive-a0b84.appspot.com",
  messagingSenderId: msj,
  appId: id,
  measurementId: "G-MEFS186ZQB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


