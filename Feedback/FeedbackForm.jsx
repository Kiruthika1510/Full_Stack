import { useState } from "react";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.feedback) return;

    setSubmittedData([...submittedData, formData]);
    setFormData({ name: "", email: "", feedback: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">📝 Feedback Form</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <textarea
            name="feedback"
            placeholder="Your Feedback"
            value={formData.feedback}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={3}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit Feedback
          </button>
        </form>

        <hr className="my-6" />

        <h3 className="text-xl font-semibold mb-3">📢 Submitted Feedback</h3>

        {submittedData.length === 0 ? (
          <p className="text-gray-500">No feedback submitted yet.</p>
        ) : (
          <div className="space-y-3">
            {submittedData.map((item, index) => (
              <div
                key={index}
                className="border p-3 rounded bg-gray-50"
              >
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">{item.email}</p>
                <p className="mt-1">{item.feedback}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
