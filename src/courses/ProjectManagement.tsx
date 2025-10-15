import React from "react";
import Navbar from "../components/Navbar";

const projectManagementCourses = [
  {
    title: "Introduction to Project Management",
    description:
      "Learn the fundamentals of managing projects from start to finish using industry-standard practices.",
    image:
      "https://images.unsplash.com/photo-1521790366321-3e28b17f5f4a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Agile and Scrum Mastery",
    description:
      "Master Agile principles and Scrum methodologies to manage dynamic and fast-paced projects.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Risk Management in Projects",
    description:
      "Identify, analyze, and mitigate project risks to ensure successful project outcomes.",
    image:
      "https://images.unsplash.com/photo-1531498860502-7c67cf02f4bb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Leadership and Team Management",
    description:
      "Develop essential leadership and communication skills for managing project teams effectively.",
    image:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Project Scheduling and Budgeting",
    description:
      "Learn to plan, schedule, and control project budgets using tools like Gantt charts and MS Project.",
    image:
      "https://images.unsplash.com/photo-1590608897129-79da98d15990?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "PMP Exam Preparation",
    description:
      "Prepare for the Project Management Professional (PMP) certification with comprehensive study materials.",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ProjectManagement() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Project Management Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectManagementCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600 text-sm">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
