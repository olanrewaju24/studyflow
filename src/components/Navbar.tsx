import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Search, ChevronRight, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories = [
    {
      name: "IT & Software",
      sub: [
        "Web Development",
        "Data Science",
        "Cybersecurity",
        "Cloud Computing",
        "AI & Machine Learning",
      ],
    },
    {
      name: "Business",
      sub: [
        "Marketing",
        "Finance",
        "Entrepreneurship",
        "Human Resources",
        "Project Management",
      ],
    },
    {
      name: "Health",
      sub: [
        "Nutrition",
        "Mental Health",
        "Nursing",
        "Public Health",
        "First Aid & Safety",
      ],
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-6 md:px-12">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          Study<span className="text-blue-600">Flow</span>
        </Link>

        {/* Search bar (Desktop only) */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-2 py-1 w-96">
          <Search className="text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search over 50+ courses"
            className="bg-transparent w-full px-2 py-1 text-gray-700 focus:outline-none"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 relative">
          <NavLink to="/home" className="hover:text-blue-600">
            Home
          </NavLink>

          {/* Courses Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              className="hover:text-blue-600 flex items-center gap-1 focus:outline-none"
            >
              Courses
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  isCoursesOpen ? "rotate-180 text-blue-600" : "text-gray-500"
                }`}
              />
            </button>

            {isCoursesOpen && (
              <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg w-56 border border-gray-100">
                {categories.map((cat) => (
                  <div
                    key={cat.name}
                    className="relative group"
                    onMouseEnter={() => setHoveredCategory(cat.name)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <div className="flex justify-between items-center px-4 py-2 hover:bg-blue-50 cursor-pointer">
                      {cat.name}
                      <ChevronRight size={16} className="text-gray-400" />
                    </div>

                    {hoveredCategory === cat.name && (
                      <div className="absolute left-full top-0 ml-1 bg-white shadow-md rounded-lg border border-gray-100 w-60">
                        {cat.sub.map((sub) => (
                          <Link
                            key={sub}
                            to={`/courses/${cat.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}/${sub
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block px-4 py-2 hover:bg-blue-50 text-gray-700"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/instructorpage" className="hover:text-blue-600">
            Instructors
          </NavLink>

          <NavLink to="/about" className="hover:text-blue-600">
            About
          </NavLink>

          <NavLink to="/profile" className="hover:text-blue-600">
            Profile
          </NavLink>
        </div>

        {/* Buttons (Desktop only) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-2 p-4 text-gray-700">
          <NavLink to="/home" className="hover:text-blue-600">
            Home
          </NavLink>

          {/* Mobile Courses Dropdown */}
          <div>
            <button
              onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              className="flex justify-between items-center w-full text-left hover:text-blue-600"
            >
              Courses
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  isCoursesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isCoursesOpen && (
              <div className="mt-2 ml-4 border-l border-gray-200 pl-3 space-y-2">
                {categories.map((cat) => (
                  <details key={cat.name} className="group">
                    <summary className="flex justify-between cursor-pointer hover:text-blue-600">
                      {cat.name}
                      <ChevronRight
                        size={14}
                        className="group-open:rotate-90 transition-transform"
                      />
                    </summary>
                    <div className="mt-1 ml-3 space-y-1">
                      {cat.sub.map((sub) => (
                        <Link
                          key={sub}
                          to={`/courses/${cat.name
                            .toLowerCase()
                            .replace(/\s+/g, "-")}/${sub
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block text-gray-600 hover:text-blue-600"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/instructorpage" className="hover:text-blue-600">
            Instructors
          </NavLink>

          <NavLink to="/about" className="hover:text-blue-600">
            About
          </NavLink>

          <NavLink to="/profile" className="hover:text-blue-600">
            Profile
          </NavLink>

          <Link
            to="/login"
            className="mt-3 inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition text-center"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
