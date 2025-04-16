import { auth } from "./firebase";

<button
  className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
  onClick={() => {
    auth.signOut();
    window.location.href = "/";
  }}
>
  Log Out
</button>


function HomeDashboard({ user }) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">Hi, {user.email} 👋</h2>
        <p>Welcome back to your dashboard.</p>
      </div>
    );
  }
  
  export default HomeDashboard;
  