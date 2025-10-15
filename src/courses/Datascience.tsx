import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";

interface Course {
  id: number;
  title: string;
  level: string;
  description: string;
  image: string;
}

const courses: Course[] = [
  // 🟢 Beginner Level
  {
    id: 1,
    title: "Introduction to Data Science",
    level: "Beginner",
    description: "Understand what data science is and how it shapes the modern world.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: 2,
    title: "Python for Data Science",
    level: "Beginner",
    description: "Learn Python programming and its essential libraries for data analysis.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  },
  {
    id: 3,
    title: "Data Analysis with Pandas & NumPy",
    level: "Beginner",
    description: "Use Pandas and NumPy to clean, transform, and analyze data efficiently.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    id: 4,
    title: "Data Visualization with Matplotlib & Seaborn",
    level: "Beginner",
    description: "Learn to visualize data patterns and insights using popular Python libraries.",
    image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a0",
  },
  {
    id: 5,
    title: "Statistics for Data Science",
    level: "Beginner",
    description: "Understand probability, distributions, and basic statistical methods.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981d",
  },

  // 🟡 Intermediate Level
  {
    id: 6,
    title: "SQL for Data Analysis",
    level: "Intermediate",
    description: "Query, join, and manipulate datasets using SQL for effective analysis.",
    image: "https://images.unsplash.com/photo-1581093588401-22a3e5b2a3a1",
  },
  {
    id: 7,
    title: "Machine Learning Fundamentals",
    level: "Intermediate",
    description: "Get started with algorithms, supervised and unsupervised learning.",
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d",
  },
  {
    id: 8,
    title: "Data Wrangling & Cleaning",
    level: "Intermediate",
    description: "Handle messy, incomplete, or inconsistent data like a pro.",
    image: "https://images.unsplash.com/photo-1560264280-88b68371db39",
  },
  {
    id: 9,
    title: "Exploratory Data Analysis (EDA)",
    level: "Intermediate",
    description: "Uncover insights and detect patterns in raw data through visual exploration.",
    image: "https://images.unsplash.com/photo-1556767576-cfba3b7e5936",
  },

  // 🔵 Advanced Level
  {
    id: 10,
    title: "Deep Learning with TensorFlow & Keras",
    level: "Advanced",
    description: "Build neural networks and deep learning models using Python frameworks.",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
  },
  {
    id: 11,
    title: "Natural Language Processing (NLP)",
    level: "Advanced",
    description: "Teach computers to understand human language and sentiment.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    id: 12,
    title: "Data Engineering",
    level: "Advanced",
    description: "Learn how to collect, store, and manage data pipelines efficiently.",
    image: "https://images.unsplash.com/photo-1573495612937-3f36895c66d1",
  },
  {
    id: 13,
    title: "Big Data Analytics",
    level: "Advanced",
    description: "Work with Hadoop, Spark, and cloud tools for large-scale analytics.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
  },
  {
    id: 14,
    title: "AI & Predictive Modeling",
    level: "Advanced",
    description: "Build predictive models and apply AI techniques to real-world problems.",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56",
  },
];

export default function DataScience() {
  return (
    <>
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm p-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={20} />
          Back Home
        </Link>
        <h1 className="text-lg font-semibold text-gray-800">Data Science Courses</h1>
      </nav>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            📊 Data Science
          </h1>
          <p className="text-center text-gray-500 mb-12">
            Explore beginner to advanced courses to master data analysis, machine learning, and AI.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <motion.div
                key={course.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl cursor-pointer"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      course.level === "Beginner"
                        ? "bg-green-100 text-green-600"
                        : course.level === "Intermediate"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {course.level}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800 mt-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{course.description}</p>
                  <button className="mt-4 w-full bg-blue-600 text-white text-sm font-medium py-2 rounded-xl hover:bg-blue-700 transition">
                    View Course
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
