import React from "react";
import Navbar from "../components/Navbar";

const hrCourses = [
  {
    title: "Introduction to Human Resources",
    description:
      "Gain an overview of HR roles, responsibilities, and strategies for building strong workplace culture.",
    image:
      "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Recruitment and Talent Acquisition",
    description:
      "Learn how to attract, interview, and hire top talent for your organization.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Employee Training and Development",
    description:
      "Understand how to design and implement training programs that boost employee performance.",
    image:
      "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Performance Management",
    description:
      "Master techniques for setting goals, giving feedback, and improving productivity through evaluation systems.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "HR Policies and Compliance",
    description:
      "Learn essential employment laws, ethics, and compliance standards for HR professionals.",
    image:
      "https://images.unsplash.com/photo-1591696331112-699b7f1e2f8e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Compensation and Benefits Management",
    description:
      "Understand payroll systems, incentives, and employee benefits to promote satisfaction and retention.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
  },
];

export default function HumanResources() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Human Resources 
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hrCourses.map((course, index) => (
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
