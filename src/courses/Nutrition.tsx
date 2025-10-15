import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Nutrition() {
  const nutritionCourses = [
    {
      title: "Introduction to Nutrition",
      description: "Understand the fundamentals of nutrition, food groups, and dietary needs.",
      image:
        "https://images.unsplash.com/photo-1556911073-52527ac437f5?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Diet and Meal Planning",
      description: "Learn how to create balanced meal plans for various health goals.",
      image:
        "https://images.unsplash.com/photo-1543352634-7e4b49ef31cc?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Sports Nutrition",
      description: "Explore nutrition strategies to enhance athletic performance and recovery.",
      image:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Clinical Nutrition",
      description: "Study the role of nutrition in preventing and managing diseases.",
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e17d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Food Science and Technology",
      description: "Dive into food processing, preservation, and nutrient retention methods.",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Public Health Nutrition",
      description: "Understand how nutrition policies and programs affect population health.",
      image:
        "https://images.unsplash.com/photo-1606144042620-1e3b22e8d57b?auto=format&fit=crop&w=800&q=80",
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
        <h1 className="text-lg font-semibold text-gray-800">Nutrition Courses</h1>
      </nav>

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Explore Nutrition Courses
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {nutritionCourses.map((course, index) => (
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
