import { GraduationCap, Users, BookOpen, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Instructorpage() {
  return (
    <>
    <Navbar/>
    <section className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        {/* HEADER */}
        <h2 className="text-4xl font-bold text-blue-700 mb-4">
          Become an Instructor
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          Share your knowledge, inspire learners, and join a growing community
          of passionate educators around the world.
        </p>

        {/* WHY TEACH SECTION */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <GraduationCap className="text-blue-600 w-10 h-10 mx-auto mb-4" />
            <h3 className="font-semibold text-lg text-blue-700 mb-2">
              Teach What You Love
            </h3>
            <p className="text-gray-600">
              Create and share courses in your field of expertise with students
              eager to learn from you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Users className="text-blue-600 w-10 h-10 mx-auto mb-4" />
            <h3 className="font-semibold text-lg text-blue-700 mb-2">
              Build a Global Audience
            </h3>
            <p className="text-gray-600">
              Reach learners from around the world and make a lasting impact on
              thousands of students.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <BookOpen className="text-blue-600 w-10 h-10 mx-auto mb-4" />
            <h3 className="font-semibold text-lg text-blue-700 mb-2">
              Earn While You Teach
            </h3>
            <p className="text-gray-600">
              Monetize your skills by creating high-quality courses and get paid
              for your impact.
            </p>
          </div>
        </div>

        {/* HOW TO BECOME SECTION */}
        <div className="bg-white rounded-3xl p-10 shadow-lg mb-16 text-left">
          <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">
            How to Become an Instructor
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-500 mt-1" />
              <p className="text-gray-700">
                <strong>Step 1:</strong> Create an account or log in to your instructor dashboard.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-500 mt-1" />
              <p className="text-gray-700">
                <strong>Step 2:</strong> Complete your instructor profile with your bio, expertise, and photo.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-500 mt-1" />
              <p className="text-gray-700">
                <strong>Step 3:</strong> Submit a sample course idea or video for approval.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-500 mt-1" />
              <p className="text-gray-700">
                <strong>Step 4:</strong> Once approved, start creating and publishing your courses!
              </p>
            </li>
          </ul>
        </div>

        {/* CALL TO ACTION */}
        <div className="text-center">
          <a href="/instructor-application">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-blue-700 transition">
              Apply Now
            </button>
          </a>

          <p className="text-gray-600 mt-3">
            Have questions?{" "}
            <a href="/contact" className="text-blue-600 underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
