import { useState } from "react";

export default function CourseEnrollment() {
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (e) => {
    e.preventDefault();
    if (!studentName || !course) return;

    setEnrolledCourses([
      ...enrolledCourses,
      { name: studentName, course: course },
    ]);

    setStudentName("");
    setCourse("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-4">📚 Course Enrollment</h2>

        <form onSubmit={handleEnroll} className="space-y-3">
          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="w-full p-2 border rounded"
          />

          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Course</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="Cyber Security">Cyber Security</option>
          </select>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Enroll
          </button>
        </form>

        <hr className="my-6" />

        <h3 className="text-xl font-semibold mb-3">✅ Enrolled Students</h3>

        {enrolledCourses.length === 0 ? (
          <p className="text-gray-500">No enrollments yet.</p>
        ) : (
          <ul className="space-y-2">
            {enrolledCourses.map((item, index) => (
              <li
                key={index}
                className="border p-3 rounded bg-gray-50"
              >
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">Course: {item.course}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
