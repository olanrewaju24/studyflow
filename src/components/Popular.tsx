import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export default function PopularCourses() {
  const [popularCourses, setPopularCourses] = useState([]);

  useEffect(() => {
    const fetchPopularCourses = async () => {
      try {
        const q = query(collection(db, "courses"), where("isPopular", "==", true));
        const querySnapshot = await getDocs(q);
        const coursesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPopularCourses(coursesData);
      } catch (err) {
        console.error("Error fetching popular courses:", err);
      }
    };
    fetchPopularCourses();
  }, []);

  return (
    <section className="bg-blue-50 py-12 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-8">Popular Courses</h2>

        {/* ✅ 5-column layout on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
          {popularCourses.length > 0 ? (
            popularCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-lg w-full max-w-[230px] mx-auto"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3 text-left">
                  <h3 className="text-base font-semibold text-blue-600 mb-1">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                    {course.description}
                  </p>
                  <button className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded hover:bg-blue-700">
                    View Course
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-base">
              No popular courses available yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
