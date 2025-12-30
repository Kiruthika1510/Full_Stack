import { useState } from "react";

export default function NotificationSystem() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (type) => {
    const messages = {
      success: "✅ Data saved successfully!",
      warning: "⚠️ Storage space is running low!",
      error: "❌ Failed to load data!",
    };

    setNotifications([
      ...notifications,
      { id: Date.now(), type, message: messages[type] }
    ]);
  };

  const removeNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">📊 Dashboard Notifications</h2>

      <div className="space-x-2 mb-6">
        <button onClick={() => addNotification("success")} className="bg-green-500 text-white px-3 py-1 rounded">Success</button>
        <button onClick={() => addNotification("warning")} className="bg-yellow-500 text-white px-3 py-1 rounded">Warning</button>
        <button onClick={() => addNotification("error")} className="bg-red-500 text-white px-3 py-1 rounded">Error</button>
      </div>

      <div className="space-y-3">
        {notifications.length === 0 && (
          <p className="text-gray-500">No notifications</p>
        )}

        {notifications.map((n) => (
          <div
            key={n.id}
            className={`p-3 rounded shadow flex justify-between items-center ${
              n.type === "success"
                ? "bg-green-100"
                : n.type === "warning"
                ? "bg-yellow-100"
                : "bg-red-100"
            }`}
          >
            <span>{n.message}</span>
            <button onClick={() => removeNotification(n.id)} className="text-sm text-gray-700">✖</button>
          </div>
        ))}
      </div>
    </div>
  );
}
