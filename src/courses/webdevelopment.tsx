import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

interface Course {
  id: number;
  title: string;
  level: string;
  description: string;
  image: string;
  path?: string; // ✅ Optional property for linking
}

const courses: Course[] = [
  {
    id: 1,
    title: "Introduction to Web Development",
    level: "Beginner",
    description: "Understand how websites work and the basics of the web.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: 2,
    title: "HTML Fundamentals",
    level: "Beginner",
    description: "Learn to structure web pages using semantic HTML.",
    image: "https://images.unsplash.com/photo-1581276879432-15a19d654956",
    path: "/courses/htmlcsscourse",
  },
  {
    id: 3,
    title: "CSS Fundamentals",
    level: "Beginner",
    description: "Style beautiful websites using colors, fonts, and layouts.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
  },
  {
    id: 4,
    title: "Tailwind CSS",
    level: "Beginner",
    description: "Build stunning, responsive designs quickly with utility classes.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    id: 5,
    title: "JavaScript for Beginners",
    level: "Beginner",
    description: "Start programming with JavaScript to make pages interactive.",
    image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
    path: "/course/javascriptessential",
  },
  {
    id: 6,
    title: "Version Control with Git & GitHub",
    level: "Beginner",
    description: "Collaborate and manage your code effectively with Git.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
  },
  {
    id: 7,
    title: "Advanced JavaScript (ES6+)",
    level: "Intermediate",
    description: "Master modern JS features and asynchronous programming.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: 8,
    title: "React.js",
    level: "Intermediate",
    description: "Learn React to build dynamic, component-based web apps.",
    image: "https://images.unsplash.com/photo-1633356127585-2f94b2d2a9a0",
    path: "/courses/react-course",
  },
  {
    id: 9,
    title: "Frontend Frameworks (Vue, Angular)",
    level: "Intermediate",
    description: "Explore other frameworks for scalable web apps.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    id: 10,
    title: "Backend Development with Node.js & Express",
    level: "Intermediate",
    description: "Learn server-side programming and build RESTful APIs.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    path: "/courses/nodejsbackend",
  },
  {
    id: 11,
    title: "Databases (MongoDB, SQL)",
    level: "Intermediate",
    description: "Store, manage, and retrieve data efficiently.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
  },
  {
    id: 12,
    title: "Full-Stack Web Development (MERN)",
    level: "Advanced",
    description: "Combine frontend and backend skills to build full apps.",
    image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93",
  },
  {
    id: 13,
    title: "Next.js (React Framework)",
    level: "Advanced",
    description: "Optimize React apps with server-side rendering and SSG.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
  },
  {
    id: 14,
    title: "Web Security Essentials",
    level: "Advanced",
    description: "Secure your web apps from common vulnerabilities.",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f",
  },
  {
    id: 15,
    title: "Progressive Web Apps (PWA)",
    level: "Advanced",
    description: "Build installable, offline-capable web experiences.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
];

export default function WebDevelopment() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            Web Development
          </h1>
          <p className="text-center text-gray-500 mb-12">
            Explore courses from beginner to advanced levels and become a skilled web developer.
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

                  {course.path ? (
                    <Link to={course.path}>
                      <button className="mt-4 w-full bg-blue-600 text-white text-sm font-medium py-2 rounded-xl hover:bg-blue-700 transition">
                        View Course
                      </button>
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="mt-4 w-full bg-gray-400 text-white text-sm font-medium py-2 rounded-xl cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
