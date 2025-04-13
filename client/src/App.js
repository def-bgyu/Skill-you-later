import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import AuthForm from "./AuthForm";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";


function App() {
  const [user, setUser] = useState(null);;


  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4 p-4">
    <h1 className="text-2xl font-bold mb-4">Skill You Later 🚀</h1>
    {user ? (
      <p>Welcome, {user.email}</p>
    ) : (
      <AuthForm setUser={setUser} />
    )}
  </div>
  );
}

export default App;
