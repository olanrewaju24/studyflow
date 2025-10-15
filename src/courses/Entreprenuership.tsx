import React from "react";
import { ArrowLeft } from "lucide-react";

const entrepreneurshipCourses = [
  {
    title: "Introduction to Entrepreneurship",
    description:
      "Learn the mindset, skills, and tools needed to start and run a successful business.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Startup Fundamentals",
    description:
      "Understand business models, funding options, and how to turn an idea into a thriving startup.",
    image:
      "https://images.unsplash.com/photo-1522204501924-8429297e6f36?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Business Planning & Strategy",
    description:
      "Master the art of writing a strong business plan and developing growth-driven strategies.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Entrepreneurial Leadership",
    description:
      "Develop leadership and decision-making skills to inspire and manage high-performing teams.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Funding and Venture Capital",
    description:
      "Explore how to attract investors, pitch ideas effectively, and manage startup finances.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Scaling Your Business",
    description:
      "Learn strategies to grow your startup sustainably, expand markets, and manage operations efficiently.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Entrepreneurship() {
  return (
    <>
   <nav className="bg-white shadow-sm p-4 flex items-center justify-between">
  <Link
    to="/"
    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
  >
    <ArrowLeft size={20} />
    Back Home
  </Link>
  <h1 className="text-lg font-semibold text-gray-800">
    Entrepreneurship Courses
  </h1>
</nav>


      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Entrepreneurship 
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {entrepreneurshipCourses.map((course, index) => (
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
