import { useState } from "react";

export default function AttendanceTracker() {
  const initialStudents = [
    { id: 1, name: "Anitha", present: false },
    { id: 2, name: "Divya", present: false },
    { id: 3, name: "Kavya", present: false },
    { id: 4, name: "Priya", present: false },
  ];

  const [students, setStudents] = useState(initialStudents);

  const toggleAttendance = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  const presentCount = students.filter((s) => s.present).length;
  const absentCount = students.length - presentCount;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">📋 Attendance Tracker</h2>

        <ul className="space-y-2">
          {students.map((student) => (
            <li
              key={student.id}
              className="flex justify-between items-center border p-3 rounded"
            >
              <span>{student.name}</span>
              <button
                onClick={() => toggleAttendance(student.id)}
                className={`px-3 py-1 rounded text-white text-sm
                  ${student.present ? "bg-green-500" : "bg-red-500"}`}
              >
                {student.present ? "Present" : "Absent"}
              </button>
            </li>
          ))}
        </ul>

        <hr className="my-4" />

        <div className="flex justify-between font-semibold">
          <p>✅ Present: {presentCount}</p>
          <p>❌ Absent: {absentCount}</p>
        </div>
      </div>
    </div>
  );
}
