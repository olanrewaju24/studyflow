import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PublicHealth() {
  const publicHealthCourses = [
    {
      title: "Introduction to Public Health",
      description:
        "Learn the core principles of public health, including disease prevention and health promotion.",
      image:
        "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Epidemiology Fundamentals",
      description:
        "Understand how diseases spread, are monitored, and controlled in populations.",
      image:
        "https://images.unsplash.com/photo-1599058917212-d750089bc07c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Global Health Issues",
      description:
        "Explore international health challenges, policies, and initiatives improving global well-being.",
      image:
        "https://images.unsplash.com/photo-1576765607924-bc2dfbd3ac4f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Health Policy and Management",
      description:
        "Dive into the planning, organization, and management of healthcare systems and policies.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Environmental Health",
      description:
        "Study the effects of environmental factors on human health and preventive strategies.",
      image:
        "https://images.unsplash.com/photo-1564869735327-1e32b8a41e86?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Maternal and Child Health",
      description:
        "Learn about improving health outcomes for mothers, infants, and children globally.",
      image:
        "https://images.unsplash.com/photo-1576765974259-3cdb64292e0b?auto=format&fit=crop&w=800&q=80",
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
        <h1 className="text-lg font-semibold text-gray-800">Public Health Courses</h1>
      </nav>

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Explore Public Health Courses
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {publicHealthCourses.map((course, index) => (
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
