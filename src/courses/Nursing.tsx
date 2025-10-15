import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Nursing() {
  const nursingCourses = [
    {
      title: "Fundamentals of Nursing",
      description:
        "Learn the essential principles and practices that form the foundation of modern nursing.",
      image:
        "https://images.unsplash.com/photo-1588776814546-ec7b28f1f8b4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Anatomy and Physiology",
      description:
        "Understand the structure and function of the human body as it relates to patient care.",
      image:
        "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Pharmacology for Nurses",
      description:
        "Study drug classifications, mechanisms, and safe medication administration practices.",
      image:
        "https://images.unsplash.com/photo-1606204962848-2a7f1e3d6fda?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Community Health Nursing",
      description:
        "Explore health promotion and disease prevention in community and public health settings.",
      image:
        "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Pediatric Nursing",
      description:
        "Focus on the nursing care of infants, children, and adolescents in various healthcare settings.",
      image:
        "https://images.unsplash.com/photo-1583912267551-0d37a52cc4fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Emergency and Critical Care",
      description:
        "Gain knowledge and skills to handle emergency and intensive care situations effectively.",
      image:
        "https://images.unsplash.com/photo-1627856791208-8d2b1d9c7347?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm p-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={20} />
          Back Home
        </Link>
        <h1 className="text-lg font-semibold text-gray-800">Nursing Courses</h1>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Explore Nursing 
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {nursingCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
