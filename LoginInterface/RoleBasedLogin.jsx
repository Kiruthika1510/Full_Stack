import { useState } from "react";

export default function RoleBasedLogin() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !role) {
      setMessage("❌ Please enter username and select a role");
      return;
    }

    // Simulated redirection based on role
    if (role === "admin") {
      setMessage(`✅ Welcome ${username}! Redirecting to Admin Dashboard...`);
    } else if (role === "teacher") {
      setMessage(`✅ Welcome ${username}! Redirecting to Teacher Portal...`);
    } else if (role === "student") {
      setMessage(`✅ Welcome ${username}! Redirecting to Student Dashboard...`);
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

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center font-semibold text-green-600">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
