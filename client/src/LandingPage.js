import { Link } from "react-router-dom";

function LandingPage() {

  console.log("LandingPage loaded ✅");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Welcome to Skill You Later 🚀</h1>
      <div className="flex gap-4">
        <Link to="/auth">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Log In</button>
        </Link>
        <Link to="/auth">
          <button className="bg-green-600 text-white px-4 py-2 rounded">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
