import { useState } from "react";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("students");

  const students = [
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B" },
    { id: 3, name: "Charlie", grade: "C" }
  ];

  const attendance = [
    { id: 1, name: "Alice", present: true },
    { id: 2, name: "Bob", present: false },
    { id: 3, name: "Charlie", present: true }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">🎓 Student Management Dashboard</h2>

      <div className="flex mb-6 justify-center space-x-4">
        <button
          onClick={() => setActiveTab("students")}
          className={`px-4 py-2 rounded ${activeTab === "students" ? "bg-blue-500 text-white" : "bg-white border"}`}
        >
          Students
        </button>
        <button
          onClick={() => setActiveTab("attendance")}
          className={`px-4 py-2 rounded ${activeTab === "attendance" ? "bg-blue-500 text-white" : "bg-white border"}`}
        >
          Attendance
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        {activeTab === "students" && (
          <table className="w-full table-auto border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-2 py-1">ID</th>
                <th className="border px-2 py-1">Name</th>
                <th className="border px-2 py-1">Grade</th>
              </tr>
            </thead>
            <tbody>
              {students.map(s => (
                <tr key={s.id} className="text-center">
                  <td className="border px-2 py-1">{s.id}</td>
                  <td className="border px-2 py-1">{s.name}</td>
                  <td className="border px-2 py-1">{s.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === "attendance" && (
          <table className="w-full table-auto border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-2 py-1">ID</th>
                <th className="border px-2 py-1">Name</th>
                <th className="border px-2 py-1">Present</th>
              </tr>
            </thead>
            <tbody>
              {attendance.map(a => (
                <tr key={a.id} className="text-center">
                  <td className="border px-2 py-1">{a.id}</td>
                  <td className="border px-2 py-1">{a.name}</td>
                  <td className="border px-2 py-1">{a.present ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
