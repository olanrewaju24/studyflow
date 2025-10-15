import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";

const cloudCourses = [
  {
    title: "Introduction to Cloud Computing",
    description:
      "Learn the fundamentals of cloud computing, including deployment models and key services.",
    image: "https://images.unsplash.com/photo-1526378722484-ccdc4e0e7f1c",
  },
  {
    title: "AWS Fundamentals",
    description:
      "Understand Amazon Web Services and explore its core offerings like EC2, S3, and Lambda.",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9",
  },
  {
    title: "Microsoft Azure Essentials",
    description:
      "Get started with Microsoft Azure and learn about cloud storage, networking, and computing.",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
  },
  {
    title: "Google Cloud Platform (GCP)",
    description:
      "Explore Google’s cloud platform services, including Compute Engine and BigQuery.",
    image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
  },
  {
    title: "Cloud Security Fundamentals",
    description:
      "Learn how to secure cloud environments and protect sensitive data from cyber threats.",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5",
  },
  {
    title: "DevOps and Cloud Automation",
    description:
      "Discover the power of automation in cloud environments using CI/CD and Infrastructure as Code.",
    image: "https://images.unsplash.com/photo-1537432376769-00aabc872d70",
  },
  {
    title: "Serverless Architecture",
    description:
      "Learn to build and deploy scalable apps using serverless technologies like AWS Lambda.",
    image: "https://images.unsplash.com/photo-1581093588401-22da4d9a4b63",
  },
  {
    title: "Cloud Networking",
    description:
      "Understand how networking works in the cloud and how to configure virtual networks securely.",
    image: "https://images.unsplash.com/photo-1537432376769-00aabc872d70",
  },
  {
    title: "Containerization and Kubernetes",
    description:
      "Master Docker and Kubernetes to deploy and scale applications efficiently in the cloud.",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
  },
  {
    title: "Multi-Cloud and Hybrid Cloud Solutions",
    description:
      "Learn how to design and manage multi-cloud strategies for business flexibility.",
    image: "https://images.unsplash.com/photo-1526378722484-ccdc4e0e7f1c",
  },
];

export default function CloudComputing() {
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
        <h1 className="text-lg font-semibold text-gray-800">
          ☁️ Cloud Computing Courses
        </h1>
      </nav>

      {/* Course Cards */}
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-600">
          Cloud Computing
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cloudCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {course.title}
                </h2>
                <p className="text-gray-600">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
