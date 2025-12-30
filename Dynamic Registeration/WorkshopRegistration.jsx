import { useState } from "react";

export default function WorkshopRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.topic) {
      alert("❌ Please fill all fields!");
    } else {
      alert("✅ Registration Successful!\nThank you for registering.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          🎓 Online Workshop Registration
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <h3 className="text-lg font-semibold">Registration Form</h3>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />

            <select
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Workshop Topic</option>
              <option value="Web Development">Web Development</option>
              <option value="AI & ML">AI & ML</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Data Science">Data Science</option>
            </select>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Register
            </button>
          </form>

          {/* Live Preview */}
          <div className="border rounded p-4 bg-gray-50">
            <h3 className="text-lg font-semibold mb-3">📄 Live Preview</h3>
            <p>
              <strong>Name:</strong> {formData.name || "---"}
            </p>
            <p>
              <strong>Email:</strong> {formData.email || "---"}
            </p>
            <p>
              <strong>Topic:</strong> {formData.topic || "---"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
