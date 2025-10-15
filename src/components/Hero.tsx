import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://assets.mixkit.co/videos/23232/23232-720.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* 🔹 Hero Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 py-24">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
           Learn. Grow. Succeed.
          </h1>

          <p className="text-gray-200 text-lg mb-8 max-w-md mx-auto md:mx-0">
            Explore a transformative approach to skill development on our
            online learning platform. Unlock a new realm of learning and elevate
            your expertise in any area.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/register"
              className="px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Enroll Now
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 border border-blue-900 text-blue-900 bg-white rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition"
            >
              What’s StudyFlow?
            </Link>
          </div>
        </div>

      
        <div className="flex-1 relative flex justify-center md:justify-end">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/01/17/08/woman-2109127_1280.jpg"
            alt="Student Learning"
            className="w-80 md:w-[400px] rounded-2xl shadow-xl border-2 border-white/20"
          />

          
          <div className="absolute top-6 left-0 bg-white/90 text-gray-800 rounded-lg shadow-md p-3 text-sm font-medium backdrop-blur-md">
            🎓 50+ Online Courses
          </div>
          <div className="absolute bottom-6 right-6 bg-blue-900 text-white rounded-lg shadow-md p-3 text-sm font-medium backdrop-blur-md">
            👩‍🎓 10k+ Online Students
          </div>
        </div>
      </div>

      {/* 🔹 Brand Logos */}
      <div className="relative z-10 mt-10">
        <div className="container mx-auto px-6 flex flex-wrap justify-center items-center gap-8 opacity-80 ">
          <img src="/logos/duolingo.svg" alt="Duolingo" className="h-8 invert" />
          <img src="/logos/microsoft.svg" alt="Microsoft" className="h-8 invert" />
          <img src="/logos/magicleap.svg" alt="Magic Leap" className="h-8 invert" />
          <img src="/logos/codecov.svg" alt="Codecov" className="h-8 invert" />
          <img src="/logos/usertesting.svg" alt="UserTesting" className="h-8 invert" />
        </div>
      </div>
    </section>
  );
}
 