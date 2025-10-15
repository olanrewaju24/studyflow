import { useEffect, useState } from "react";



const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    text: "“This platform changed the way I learn. The courses are well structured and easy to follow.”",
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "“The instructors are amazing! I gained real-world skills and a certificate to show for it.”",
    image: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  },
  {
    id: 3,
    name: "Alex Johnson",
    text: "“I love how interactive the lessons are. I feel confident in my skills now.”",
    image: "https://cdn-icons-png.flaticon.com/512/146/146035.png",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-10">Testimonials</h2>

        <div className="bg-gray-50 shadow-md rounded-2xl p-8 max-w-md mx-auto transition-all duration-500">
          <img
            src={current.image}
            alt={current.name}
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-600 italic mb-4">“{current.text}”</p>
          <h3 className="font-medium text-gray-800">{current.name}</h3>

          {/* Dots for navigation */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((t, i) => (
              <span
                key={t.id}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
