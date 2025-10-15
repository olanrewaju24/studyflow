import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

interface User {
  name: string;
  email: string;
  joined: string;
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className=" container bg-blue-50  min-h-30 w-40 flex items-center justify-center text-gray-600 m-50 p-5 ">
        <h2 className="">Note</h2>
        <p>Pls Sign In</p>
      </div>
    );
  }

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 border-b pb-6">
          <img
            src="https://images.unsplash.com/photo-1740252117027-4275d3f84385?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="avatar"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {user.name}
            </h2>
            <p className="text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-400 mt-1">
              Joined {user.joined || "Recently"}
            </p>
          </div>
        </div>

        {/* Dashboard */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              🎓 Certificates
            </h3>
            <p className="text-sm text-gray-600">
              View and download your earned certificates.
            </p>
          </div>

          <div className="p-6 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-green-600 mb-2">
              📚 Courses
            </h3>
            <p className="text-sm text-gray-600">
              See all your enrolled and completed courses.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-yellow-600 mb-2">
              ⚙️ Account Settings
            </h3>
            <p className="text-sm text-gray-600">
              Update your profile, password, and preferences.
            </p>
          </div>

          <div className="p-6 bg-purple-50 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">
              🏆 Achievements
            </h3>
            <p className="text-sm text-gray-600">
              Check out your milestones and awards.
            </p>
          </div>

          <button
    onClick={() => {
    localStorage.removeItem("user");
    navigate("/login");
  }}
       className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
  >
  Log Out
</button>

        </div>
      </div>
    </div>
    </>
  );
}
