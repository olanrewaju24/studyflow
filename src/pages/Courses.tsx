import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function Courses() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      name: "IT",
      count: "1,275 Courses",
      subcategories: [
        "Web Development",
        "Cybersecurity",
        "Data Science",
        "Software Engineering",
        "Cloud Computing",
      ],
    },
    {
      name: "Health",
      count: "1,042 Courses",
      subcategories: [
        "Mental Health",
        "Healthcare",
        "Nursing",
        "Nutrition",
        "Pharmacology",
      ],
    },
    {
      name: "Language",
      count: "314 Courses",
      subcategories: [
        "English",
        "French",
        "Spanish",
        "Sign Language",
        "Business Communication",
      ],
    },
    {
      name: "Business",
      count: "1,744 Courses",
      subcategories: [
        "Entrepreneurship",
        "Marketing",
        "Finance",
        "Sales",
        "Leadership",
      ],
    },
    {
      name: "Management",
      count: "612 Courses",
      subcategories: [
        "Project Management",
        "Operations",
        "Human Resources",
        "Strategy",
      ],
    },
  ];

  return (
    <div className="absolute left-0 top-full mt-2 w-[650px] bg-white shadow-2xl rounded-xl flex overflow-hidden border border-blue-100 z-50">
      {/* Left Side: Categories */}
      <div className="w-1/2 bg-white">
        <h3 className="px-5 pt-4 pb-2 text-sm font-semibold text-blue-700 uppercase">
          Course Categories
        </h3>
        <ul>
          {categories.map((cat) => (
            <li
              key={cat.name}
              onMouseEnter={() => setHoveredCategory(cat.name)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`flex items-center justify-between px-5 py-3 cursor-pointer hover:bg-blue-50 transition ${
                hoveredCategory === cat.name ? "bg-blue-50" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{cat.icon}</span>
                <div>
                  <p className="font-medium text-gray-800">{cat.name}</p>
                  <p className="text-xs text-gray-500">{cat.count}</p>
                </div>
              </div>
              <ChevronRight
                size={16}
                className={`text-blue-500 transition ${
                  hoveredCategory === cat.name ? "opacity-100" : "opacity-50"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side: Subcategories */}
      <div className="w-1/2 bg-blue-50 p-5">
        {hoveredCategory ? (
          <>
            <h4 className="text-blue-800 font-semibold mb-3">
              {hoveredCategory} Courses
            </h4>
            <ul className="space-y-2">
              {categories
                .find((cat) => cat.name === hoveredCategory)
                ?.subcategories.map((sub) => (
                  <li
                    key={sub}
                    className="text-gray-700 bg-white hover:bg-blue-100 hover:text-blue-700 rounded-lg px-3 py-2 cursor-pointer transition"
                  >
                    {sub}
                  </li>
                ))}
            </ul>
          </>
        ) : (
          <p className="text-gray-400 text-sm mt-16 text-center">
            
          </p>
        )}
      </div>
    </div>
  );
}
