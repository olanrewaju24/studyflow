import React from "react";
import Navbar from "../components/Navbar";

const financeCourses = [
  {
    title: "Personal Finance Management",
    description:
      "Learn how to budget, save, and invest wisely to achieve financial stability and independence.",
    image:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Financial Accounting Fundamentals",
    description:
      "Understand accounting principles, balance sheets, and income statements for business success.",
    image:
      "https://images.unsplash.com/photo-1625246333195-78a93a2b4c3d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Investment Strategies",
    description:
      "Master the basics of stock markets, bonds, mutual funds, and portfolio diversification.",
    image:
      "https://images.unsplash.com/photo-1569025690938-a00729c9e1c0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Corporate Finance",
    description:
      "Dive into business finance concepts like capital structure, valuation, and financial planning.",
    image:
      "https://images.unsplash.com/photo-1624629325400-4cbbf8a35d65?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cryptocurrency & Blockchain",
    description:
      "Explore the world of digital currencies, blockchain technology, and decentralized finance (DeFi).",
    image:
      "https://images.unsplash.com/photo-1620315274845-39d6b8a3f02b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Financial Modeling with Excel",
    description:
      "Learn to build and analyze financial models using Excel for real-world decision making.",
    image:
      "https://images.unsplash.com/photo-1591696331112-699b7f1e2f8e?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Finance() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Finance 
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {financeCourses.map((course, index) => (
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
