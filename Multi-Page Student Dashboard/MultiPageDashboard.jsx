import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Dashboard() {
  return <h2 className="text-xl font-bold">Dashboard Home</h2>;
}

function Students() {
  const students = [
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B" },
    { id: 3, name: "Charlie", grade: "C" }
  ];
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Students</h2>
      <ul className="list-disc list-inside">
        {students.map(s => <li key={s.id}>{s.name} - Grade: {s.grade}</li>)}
      </ul>
    </div>
  );
}

function Attendance() {
  const attendance = [
    { id: 1, name: "Alice", present: true },
    { id: 2, name: "Bob", present: false },
    { id: 3, name: "Charlie", present: true }
  ];
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Attendance</h2>
      <ul className="list-disc list-inside">
        {attendance.map(a => (
          <li key={a.id}>{a.name} - {a.present ? "Present" : "Absent"}</li>
        ))}
      </ul>
    </div>
  );
}

export default function MultiPageDashboard() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">🎓 Student Dashboard</h1>

        <nav className="flex justify-center space-x-4 mb-6">
          <Link className="px-4 py-2 bg-blue-500 text-white rounded" to="/">Dashboard</Link>
          <Link className="px-4 py-2 bg-blue-500 text-white rounded" to="/students">Students</Link>
          <Link className="px-4 py-2 bg-blue-500 text-white rounded" to="/attendance">Attendance</Link>
        </nav>

        <div className="bg-white p-4 rounded shadow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/attendance" element={<Attendance />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
