import { useEffect, useState } from "react";

export default function AutoNotification() {
  const [notification, setNotification] = useState("");

  // System automatically generates notification
  useEffect(() => {
    setNotification("🔔 Welcome! System loaded successfully.");

    // Auto remove after 3 seconds
    const timer = setTimeout(() => {
      setNotification("");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-96 text-center">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>

        {notification && (
          <div className="bg-blue-100 text-blue-800 p-3 rounded mb-3">
            {notification}
          </div>
        )}

        <p>Main dashboard content here...</p>
      </div>
    </div>
  );
}
