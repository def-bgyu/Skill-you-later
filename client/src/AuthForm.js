import React, { useState } from "react";
import { auth, googleProvider } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

function AuthForm({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("Signed Up:", res.user);
        setUser(res.user);
      })
      .catch((err) => alert(err.message));
  };

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("Logged In:", res.user);
        setUser(res.user);
      })
      .catch((err) => alert(err.message));
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
