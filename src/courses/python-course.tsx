import React, { useState } from "react";

const course = {
  id: 1,
  title: "Python for Data Science",
  subtitle: "Master Python and essential libraries to analyze and visualize data effectively.",
  instructor: "Dr. Ada Nwosu",
  rating: 4.9,
  reviews: 412,
  students: 2890,
  price: "₦18,000",
  originalPrice: "₦36,000",
  previewVideo: "https://www.youtube.com/embed/rfscVS0vtbw",
  features: [
    "15 hours of video lessons",
    "30 downloadable notebooks",
    "Access on mobile and TV",
    "Certificate of completion",
  ],
  learningOutcomes: [
    "Write Python scripts for data analysis",
    "Manipulate data using Pandas and NumPy",
    "Create visualizations with Matplotlib and Seaborn",
    "Work with real-world datasets and projects",
  ],
  modules: [
    {
      title: "Module 1: Introduction to Python",
      lessons: [
        { title: "Python Basics and Syntax", duration: "15:30" },
        { title: "Variables, Loops, and Conditionals", duration: "18:12" },
      ],
    },
    {
      title: "Module 2: Working with Data",
      lessons: [
        { title: "DataFrames with Pandas", duration: "22:05" },
        { title: "Data Cleaning and Transformation", duration: "26:18" },
      ],
    },
  ],
};

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 transition-transform"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const PythonForDataScience: React.FC = () => {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const toggleModule = (index: number) => setOpenModule(openModule === index ? null : index);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* --- Header --- */}
      <header className="bg-gray-800 text-white p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-gray-400">Courses &gt; Data Science</p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">{course.title}</h1>
          <p className="text-lg md:text-xl text-gray-300 mt-2">{course.subtitle}</p>
          <div className="flex items-center space-x-4 mt-4">
            <span className="text-yellow-400">★ {course.rating}</span>
            <span>({course.reviews} reviews)</span>
            <span>{course.students} students</span>
          </div>
          <p className="mt-2">
            Created by <span className="font-semibold">{course.instructor}</span>
          </p>
        </div>
      </header>

      {/* --- Content --- */}
      <main className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Learning Outcomes */}
          <div className="border border-gray-200 bg-white p-6 rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">What you'll learn</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {course.learningOutcomes.map((outcome, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Modules */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Course content</h2>
            <div className="border border-gray-200 bg-white rounded-md shadow-sm">
              {course.modules.map((module, index) => (
                <div key={index} className="border-b last:border-b-0">
                  <button
                    onClick={() => toggleModule(index)}
                    className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100"
                  >
                    <span className="font-semibold">{module.title}</span>
                    <div className={`${openModule === index ? "rotate-180" : ""}`}>
                      <ChevronDownIcon />
                    </div>
                  </button>
                  {openModule === index && (
                    <ul className="p-4 space-y-2">
                      {module.lessons.map((lesson, i) => (
                        <li key={i} className="flex justify-between items-center text-gray-700">
                          <span>- {lesson.title}</span>
                          <span className="text-sm text-gray-500">{lesson.duration}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky top-8 h-fit">
          <div className="border bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981d?auto=format&fit=crop&w=800&q=80"
                alt="Course preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold">{course.price}</span>
                <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition-colors">
                Enroll Now
              </button>
              <p className="text-center text-xs text-gray-500 mt-2">
                30-Day Money-Back Guarantee
              </p>
              <hr className="my-4" />
              <h3 className="font-semibold mb-2">This course includes:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {course.features.map((feature, i) => (
                  <li key={i}>- {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default PythonForDataScience;
