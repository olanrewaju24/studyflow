import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function MentalHealth() {
  const mentalHealthCourses = [
    {
      title: "Introduction to Mental Health",
      description:
        "Understand the basics of mental health, emotional well-being, and psychological resilience.",
      image:
        "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Stress Management Techniques",
      description:
        "Learn practical strategies to manage and reduce stress in everyday life.",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Mindfulness and Meditation",
      description:
        "Explore mindfulness practices and meditation techniques for inner calm and focus.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Psychology of Happiness",
      description:
        "Dive into the science of happiness, positive thinking, and emotional intelligence.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Counseling and Therapy Basics",
      description:
        "Gain foundational knowledge of counseling techniques and empathetic communication.",
      image:
        "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Mental Health in the Workplace",
      description:
        "Learn how to promote mental health awareness and support systems at work.",
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80",
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
        <h1 className="text-lg font-semibold text-gray-800">Mental Health Courses</h1>
      </nav>

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Explore Mental Health 
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mentalHealthCourses.map((course, index) => (
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
