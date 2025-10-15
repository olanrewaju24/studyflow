import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";

export default function InstructorApplication() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    expertise: "",
    experience: "",
    bio: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "instructorApplications"), {
        ...formData,
        createdAt: Timestamp.now(),
        status: "pending",
      });
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        expertise: "",
        experience: "",
        bio: "",
      });
    } catch (err) {
      console.error("Error submitting application:", err);
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
        <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
        <h2 className="text-2xl font-bold text-blue-700">Application Submitted!</h2>
        <p className="text-gray-600 mt-2 max-w-md">
          Thank you for applying to become an instructor. Our team will review your submission and contact you soon.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
    <section className="bg-gray-50 py-16 px-6 min-h-screen">
      <div className="container mx-auto max-w-2xl bg-white shadow-xl rounded-2xl p-10">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
          Instructor Application Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-left text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 mb-1">Area of Expertise</label>
            <input
              type="text"
              name="expertise"
              required
              value={formData.expertise}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Web Development, Data Science..."
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 mb-1">Teaching Experience</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 3 years, taught 200+ students..."
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 mb-1">Short Bio</label>
            <textarea
              name="bio"
              rows="4"
              value={formData.bio}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about yourself and why you want to teach..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold text-white ${
              loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </section>
    </>
  );
}
