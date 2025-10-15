import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Github } from "lucide-react";

interface Instructor {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    role: "Data Science Instructor",
    bio: "PhD in Computer Science with 10+ years of teaching experience in AI and analytics.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 2,
    name: "Ogbonochukwu Dnaiel",
    role: "Web Development Expert",
    bio: "Full-stack developer specializing in React, Node.js, and cloud deployment.",
    image:
      "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "UI/UX Designer",
    bio: "Creative designer passionate about crafting intuitive digital experiences.",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&q=80",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 4,
    name: "Michael Aliu",
    role: "Cybersecurity Analyst",
    bio: "Certified Ethical Hacker with expertise in data protection and secure systems.",
    image:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 5,
    name: "Olivia Brown",
    role: "Digital Marketing Coach",
    bio: "Helping learners master SEO, content strategy, and brand storytelling.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 6,
    name: "Daniel Johnson",
    role: "Cloud Computing Specialist",
    bio: "AWS Certified professional guiding students through scalable app deployment.",
    image:
      "https://images.unsplash.com/photo-1700488357611-dc4bedcb455d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
];

const Instructors: FC = () => {
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const perPage = 3;
  const totalPages = Math.ceil(instructors.length / perPage);

  const nextSlide = () => setPage((p) => (p + 1) % totalPages);
  const prevSlide = () => setPage((p) => (p - 1 + totalPages) % totalPages);


  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const startIndex = page * perPage;
  const currentInstructors = instructors.slice(startIndex, startIndex + perPage);

  return (
    <section
      className="py-16 bg-gray-50 px-6 md:px-12 max-w-7xl mx-auto text-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        Meet Our Top Instructors
      </h2>

      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-blue-100"
        >
          <ChevronLeft className="w-6 h-6 text-blue-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-blue-100"
        >
          <ChevronRight className="w-6 h-6 text-blue-600" />
        </button>

        {/* Instructor Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mt-8"
          >
            {currentInstructors.map(({ id, name, role, bio, image, socials }) => (
              <div
                key={id}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-28 h-28 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                <p className="text-blue-600 text-sm font-medium mt-1">{role}</p>
                <p className="text-gray-600 text-sm mt-3">{bio}</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-4">
                  {socials.linkedin && (
                    <a
                      href={socials.linkedin}
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800 transition"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {socials.twitter && (
                    <a
                      href={socials.twitter}
                      target="_blank"
                      className="text-blue-400 hover:text-blue-600 transition"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {socials.github && (
                    <a
                      href={socials.github}
                      target="_blank"
                      className="text-gray-800 hover:text-gray-900 transition"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index)}
            className={`w-3 h-3 rounded-full transition ${
              page === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Instructors;
