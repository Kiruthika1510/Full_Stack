import { useState } from "react";

export default function BasicAuth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Hardcoded credentials (simulation)
  const correctUsername = "admin";
  const correctPassword = "1234";

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("❌ Username and Password cannot be empty!");
      return;
    }

    if (username === correctUsername && password === correctPassword) {
      alert("✅ Login Successful! Welcome " + username);
    } else {
      alert("❌ Invalid Username or Password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">🔐 Login</h2>

        <form onSubmit={handleLogin} className="space-y-3">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
