import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

//values at project settings on firebase website

const firebaseConfig = {
  apiKey: "AIzaSyDWbynkveXtHDrw_yz-8fFKV-AYc0hWyD4",
  authDomain: "skillyoulater-authg.firebaseapp.com",
  projectId: "skillyoulater-authg",
  storageBucket: "skillyoulater-authg.appspot.com",
  messagingSenderId: "861718526060",
  appId: "1:861718526060:web:2c7afe42697c33c1c6c049"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
