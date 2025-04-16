// client/src/App.js

import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // ✅ import only routing stuff
import './App.css';

import { auth } from "./firebase";
import AuthForm from "./AuthForm";
import LandingPage from "./LandingPage";
import HomeDashboard from "./HomeDashboard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthForm setUser={setUser} />} />
      <Route
        path="/home"
        element={user ? <HomeDashboard user={user} /> : <Navigate to="/auth" />}
      />
    </Routes>
  );
}

export default App;
