// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APPID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyB7RN2fhjsoS9i2FUt8MmDN5CLHznlvGiU",
  authDomain: "doctors-portal-94570.firebaseapp.com",
  projectId: "doctors-portal-94570",
  storageBucket: "doctors-portal-94570.appspot.com",
  messagingSenderId: "775920085765",
  appId: "1:775920085765:web:6d0385bf324b7cfba8656c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
