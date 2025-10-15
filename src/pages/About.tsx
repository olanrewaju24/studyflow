// src/pages/About.tsx
import { FC } from "react";
import { Users, Award, Clock, BookOpen } from "lucide-react";
import Navbar from "../components/Navbar";

const features = [
  {
    id: 1,
    title: "Expert Instructors",
    description:
      "Our team is made up of professionals with years of real-world experience ready to guide you.",
    icon: Users,
  },
  {
    id: 2,
    title: "Flexible Learning",
    description:
      "Study at your own pace with our easy-to-access platform available anytime, anywhere.",
    icon: Clock,
  },
  {
    id: 3,
    title: "Recognized Certificates",
    description:
      "Earn certificates that demonstrate your skills and open doors to new opportunities.",
    icon: Award,
  },
  {
    id: 4,
    title: "Comprehensive Courses",
    description:
      "Explore a wide range of topics designed to help you grow professionally and personally.",
    icon: BookOpen,
  },
];

const team = [
  {
    name: "Olanrewaju Folashayo",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Lanre Mercy",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1603415526960-f8f0a4c8bf79?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Onyekachukwu Chioma",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=500&q=80",
  },
];

const About: FC = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gradient-to-b from-blue-50 via-white to-gray-50">
      {/* HERO SECTION */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-gray-500 text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About StudyFlow</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Empowering learners worldwide through accessible, flexible, and
          high-quality online education.
        </p>
      </section>

      {/* OUR MISSION SECTION */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At StudyFlow, our mission is to create an inclusive platform that
            helps people from all walks of life achieve their learning goals.
            We believe that education should be accessible, affordable, and
            engaging. Whether you’re learning new skills or advancing your
            career, we’re here to guide you every step of the way.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Join Our Community
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=700&q=80"
            alt="Students collaborating"
            className="rounded-3xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-16 bg-white px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Why Choose StudyFlow
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ id, title, description, icon: Icon }) => (
            <div
              key={id}
              className="bg-blue-50 hover:bg-blue-100 transition p-6 rounded-2xl shadow-sm"
            >
              <div className="bg-blue-100 text-blue-600 w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
