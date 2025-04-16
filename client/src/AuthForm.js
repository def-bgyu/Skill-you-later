import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

function AuthForm({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      setUser(user);
  
      // Only save to MongoDB the first time (on signup)
      await fetch("http://localhost:5000/api/user/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || "New User",
          canTeach: [],
          wantToLearn: [],
        }),
      });
  
      console.log("New user saved to MongoDB");
      //After login/Signup
      navigate("/home"); 
    } catch (err) {
      alert(err.message);
    }


  };

  const login = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      setUser(user);
  
      console.log("Logged in user:", user);
      // Optional: fetch profile here if needed
    } catch (err) {
      alert(err.message);
    }
  };

  const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log("Google user:", res.user);
        setUser(res.user);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="flex flex-col gap-3 items-center p-4">
      <input
        className="border px-3 py-2 rounded w-64"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border px-3 py-2 rounded w-64"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signUp} className="bg-green-500 text-white px-4 py-2 rounded">
        Sign Up
      </button>
      <button onClick={login} className="bg-blue-500 text-white px-4 py-2 rounded">
        Log In
      </button>
      <button onClick={googleLogin} className="bg-red-500 text-white px-4 py-2 rounded">
        Login with Google
      </button>
    </div>
  );
}

export default AuthForm;
