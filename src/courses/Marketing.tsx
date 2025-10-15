import React from "react";
import Navbar from "../components/Navbar";

const marketingCourses = [
  {
    title: "Digital Marketing Fundamentals",
    description:
      "Understand the core principles of digital marketing including SEO, PPC, and social media strategy.",
    image: "/images/digital-marketing.jpg",
  },
  {
    title: "Social Media Marketing",
    description:
      "Learn how to grow and engage audiences across platforms like Instagram, TikTok, and LinkedIn.",
    image: "/images/social-media.jpg",
  },
  {
    title: "Email Marketing Strategies",
    description:
      "Discover how to craft compelling email campaigns that convert and build customer loyalty.",
    image: "/images/email-marketing.jpg",
  },
  {
    title: "Content Marketing Mastery",
    description:
      "Create powerful written and visual content that drives brand awareness and sales.",
    image: "/images/content-marketing.jpg",
  },
  {
    title: "SEO Optimization",
    description:
      "Learn to optimize websites and content to rank higher on search engines like Google.",
    image: "/images/seo.jpg",
  },
  {
    title: "Marketing Analytics",
    description:
      "Use data and analytics tools to measure campaign success and make informed marketing decisions.",
    image: "/images/analytics.jpg",
  },
];

export default function Marketing() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Marketing 
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {marketingCourses.map((course, index) => (
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
