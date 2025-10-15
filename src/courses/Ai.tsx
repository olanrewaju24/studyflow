import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const aiCourses = [
  {
    title: "Introduction to Artificial Intelligence",
    description:
      "Understand what AI is, its history, applications, and how it is shaping the future.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Machine Learning Fundamentals",
    description:
      "Learn core ML concepts like supervised and unsupervised learning, regression, and classification.",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Deep Learning with TensorFlow",
    description:
      "Build neural networks and deep learning models using TensorFlow and Keras.",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Natural Language Processing (NLP)",
    description:
      "Explore text analytics, sentiment analysis, and chatbots using Python and NLP libraries.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Computer Vision with OpenCV",
    description:
      "Learn how to analyze and process images and videos using OpenCV and deep learning models.",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI for Business",
    description:
      "Understand how AI can transform industries like healthcare, finance, and marketing.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Reinforcement Learning",
    description:
      "Dive into intelligent decision-making systems that learn through rewards and feedback.",
    image: "https://images.unsplash.com/photo-1603791452906-c5d31e3e9621?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Ethics in Artificial Intelligence",
    description:
      "Learn about fairness, bias, and the social implications of deploying AI systems.",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI Model Deployment",
    description:
      "Master the art of deploying AI models to production using cloud services and APIs.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Generative AI and LLMs",
    description:
      "Learn about large language models like GPT, image generation, and other generative AI tools.",
    image: "https://images.unsplash.com/photo-1695654403213-75b4a59e0d56?auto=format&fit=crop&w=800&q=80",
  },
];

export default function AIMachineLearning() {
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
        <h1 className="text-lg font-semibold text-gray-800">
          AI & Machine Learning Courses
        </h1>
      </nav>

      {/* Courses */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Explore AI & Machine Learning
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {aiCourses.map((course, index) => (
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
