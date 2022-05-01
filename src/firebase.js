
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_CONFIG_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_CONFIG_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_CONFIG_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_CONFIG_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_CONFIG_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_CONFIG_APP_ID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCir7kBiDbMwAo3sd3OMKEeUIW0eRW4rEQ",
//   authDomain: "pnyx-web-staging.firebaseapp.com",
//   projectId: "pnyx-web-staging",
//   storageBucket: "pnyx-web-staging.appspot.com",
//   messagingSenderId: "684735359803",
//   appId: "1:684735359803:web:1b47c7bddafe0a9ace251e"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();