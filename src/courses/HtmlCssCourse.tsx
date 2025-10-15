import React, { useState } from "react";

const htmlCssCourse = {
  id: 1,
  title: "HTML & CSS Fundamentals",
  subtitle: "Master the building blocks of web design and front-end development.",
  instructor: "Emily Johnson",
  rating: 4.9,
  reviews: 210,
  students: 2540,
  price: "₦10,000",
  originalPrice: "₦20,000",
  previewVideo: "https://www.youtube.com/embed/UB1O30fR-EE",
  features: [
    "8 hours of video lessons",
    "Hands-on coding projects",
    "Lifetime access",
    "Certificate of completion"
  ],
  learningOutcomes: [
    "Understand HTML structure and semantics",
    "Style pages with modern CSS",
    "Build responsive websites",
    "Use Flexbox and Grid effectively"
  ],
  modules: [
    {
      title: "Module 1: Getting Started with HTML",
      lessons: [
        { title: "HTML Basics", duration: "12:10" },
        { title: "Headings, Paragraphs, and Lists", duration: "14:45" }
      ]
    },
    {
      title: "Module 2: Introduction to CSS",
      lessons: [
        { title: "CSS Selectors and Colors", duration: "18:20" },
        { title: "Styling Text and Boxes", duration: "21:00" }
      ]
    }
  ]
};

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 transition-transform">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export default function HtmlCssCourse() {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const toggleModule = (index: number) => setOpenModule(openModule === index ? null : index);

  const c = htmlCssCourse;

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-gray-800 text-white p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-gray-400">Courses &gt; {c.title}</p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">{c.title}</h1>
          <p className="text-lg text-gray-300 mt-2">{c.subtitle}</p>
          <div className="flex items-center space-x-4 mt-4">
            <span className="text-yellow-400">★ {c.rating}</span>
            <span>({c.reviews} reviews)</span>
            <span>{c.students} students</span>
          </div>
          <p className="mt-2">Instructor: <span className="font-semibold">{c.instructor}</span></p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="border bg-white p-6 rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">What you'll learn</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {c.learningOutcomes.map((o, i) => (
                <li key={i} className="flex"><span className="text-green-500 mr-2">✓</span>{o}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Course content</h2>
            <div className="border bg-white rounded-md shadow-sm">
              {c.modules.map((m, i) => (
                <div key={i} className="border-b last:border-b-0">
                  <button onClick={() => toggleModule(i)} className="w-full flex justify-between items-center p-4 hover:bg-gray-100">
                    <span className="font-semibold">{m.title}</span>
                    <div className={`${openModule === i ? "rotate-180" : ""}`}>
                      <ChevronDownIcon />
                    </div>
                  </button>
                  {openModule === i && (
                    <ul className="p-4 space-y-2">
                      {m.lessons.map((l, j) => (
                        <li key={j} className="flex justify-between text-gray-700">
                          <span>- {l.title}</span><span className="text-sm text-gray-500">{l.duration}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:sticky top-8 h-fit">
          <div className="border bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://placehold.co/600x400/000000/FFFFFF/png?text=HTML+%26+CSS+Preview" alt="Course preview" />
            <div className="p-6">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold">{c.price}</span>
                <span className="text-lg text-gray-500 line-through">{c.originalPrice}</span>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition">
                Enroll Now
              </button>
              <hr className="my-4" />
              <h3 className="font-semibold mb-2">This course includes:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {c.features.map((f, i) => <li key={i}>- {f}</li>)}
              </ul>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
