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
  {
    id: 1,
    title: "Introduction to Cybersecurity",
    level: "Beginner",
    description:
      "Learn the basics of cybersecurity, online threats, and how to stay safe digitally.",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f",
  },
  {
    id: 2,
    title: "Networking Fundamentals",
    level: "Beginner",
    description:
      "Understand how computer networks work — the foundation of cybersecurity.",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
  },
  {
    id: 3,
    title: "Operating Systems & Security Basics",
    level: "Beginner",
    description:
      "Learn how Windows, Linux, and macOS manage security and user permissions.",
    image: "https://images.unsplash.com/photo-1590608897129-79da98d159c2",
  },
  {
    id: 4,
    title: "Cyber Hygiene & Online Safety",
    level: "Beginner",
    description:
      "Discover safe internet habits, password management, and email protection.",
    image: "https://images.unsplash.com/photo-1614064642313-09e9916c9bda",
  },
  {
    id: 5,
    title: "Introduction to Cryptography",
    level: "Beginner",
    description:
      "Learn how encryption secures communication and protects sensitive information.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    id: 6,
    title: "Ethical Hacking Fundamentals",
    level: "Intermediate",
    description:
      "Understand the mindset of hackers and learn the basics of penetration testing.",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa",
  },
  {
    id: 7,
    title: "Network Security & Firewalls",
    level: "Intermediate",
    description:
      "Protect networks using firewalls, VPNs, and secure configurations.",
    image: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957",
  },
  {
    id: 8,
    title: "Vulnerability Assessment",
    level: "Intermediate",
    description:
      "Learn to identify, analyze, and mitigate vulnerabilities in systems and software.",
    image: "https://images.unsplash.com/photo-1581091215367-59ab6c6c6d3a",
  },
  {
    id: 9,
    title: "Incident Response & Forensics",
    level: "Intermediate",
    description:
      "Develop skills to investigate, contain, and respond to security incidents.",
    image: "https://images.unsplash.com/photo-1622001921449-74e3610d6c31",
  },
  {
    id: 10,
    title: "Advanced Ethical Hacking & Penetration Testing",
    level: "Advanced",
    description:
      "Master advanced hacking techniques and real-world penetration testing tools.",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa",
  },
  {
    id: 11,
    title: "Malware Analysis & Reverse Engineering",
    level: "Advanced",
    description:
      "Dissect and understand how malicious software operates and spreads.",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f",
  },
  {
    id: 12,
    title: "Cloud Security",
    level: "Advanced",
    description:
      "Secure applications and data in cloud environments like AWS, Azure, and GCP.",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f",
  },
  {
    id: 13,
    title: "Security Operations Center (SOC) Analyst",
    level: "Advanced",
    description:
      "Monitor, detect, and respond to cybersecurity threats in real time.",
    image: "https://images.unsplash.com/photo-1556767576-cfba3b7e5936",
  },
  {
    id: 14,
    title: "Cybersecurity Risk Management",
    level: "Advanced",
    description:
      "Learn frameworks and policies to assess and mitigate enterprise security risks.",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f",
  },
];

export default function CyberSecurity() {
  return (
    <>

      {/* Back Navigation Bar */}
      <nav className="bg-white shadow-sm p-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={20} />
          Back Home
        </Link>
        <h1 className="text-lg font-semibold text-gray-800">Cybersecurity Courses</h1>
      </nav>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            🔐 Cybersecurity
          </h1>
          <p className="text-center text-gray-500 mb-12">
            Explore beginner to advanced cybersecurity courses and learn how to protect digital systems and data.
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
                  <p className="text-gray-500 text-sm mt-1">
                    {course.description}
                  </p>
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
