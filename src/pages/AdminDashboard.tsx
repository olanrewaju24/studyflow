import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/config";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import UsersList from "../admin/UsersList";

export default function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const [courses, setCourses] = useState([]);
  const [users, setUsers] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [applications, setApplications] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // ✅ Restrict access
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email === "chioma.onyekachukwu@student.aul.edu.ng") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
        window.location.href = "/";
      }
    });
    return () => unsubscribe();
  }, []);

  // ✅ Fetch data
  useEffect(() => {
    const fetchCourses = async () => {
      const snapshot = await getDocs(collection(db, "courses"));
      setCourses(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const snapshot = await getDocs(collection(db, "users"));
      setUsers(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchUsers();
  }, []);

  // ✅ Fetch instructor applications
  useEffect(() => {
    const fetchApplications = async () => {
      const snapshot = await getDocs(collection(db, "instructorApplications"));
      setApplications(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchApplications();
  }, []);

  // ✅ Fetch approved instructors
  useEffect(() => {
    const fetchInstructors = async () => {
      const snapshot = await getDocs(collection(db, "instructors"));
      setInstructors(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchInstructors();
  }, []);

  // ✅ Approve instructor
  const handleApproveInstructor = async (app) => {
    try {
      await addDoc(collection(db, "instructors"), {
        name: app.name,
        email: app.email,
        expertise: app.expertise,
        experience: app.experience,
        bio: app.bio,
        image:
          "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // default avatar
        createdAt: new Date().toISOString(),
      });
      await updateDoc(doc(db, "instructorApplications", app.id), {
        status: "approved",
      });
      setApplications(
        applications.map((a) =>
          a.id === app.id ? { ...a, status: "approved" } : a
        )
      );
      alert("✅ Instructor approved successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to approve instructor");
    }
  };

  // ✅ Reject instructor
  const handleRejectInstructor = async (app) => {
    try {
      await updateDoc(doc(db, "instructorApplications", app.id), {
        status: "rejected",
      });
      setApplications(
        applications.map((a) =>
          a.id === app.id ? { ...a, status: "rejected" } : a
        )
      );
      alert("🚫 Instructor application rejected");
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Add new course
  const handleAddCourse = async (e) => {
    e.preventDefault();
    if (!title || !category || !image) return;
    setLoading(true);
    try {
      await addDoc(collection(db, "courses"), {
        title,
        category,
        image,
        createdAt: new Date().toISOString(),
      });
      alert("Course added successfully!");
      setTitle("");
      setCategory("");
      setImage("");
    } catch (err) {
      console.error(err);
      alert(" Failed to add course");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCourse = async (id) => {
    try {
      await deleteDoc(doc(db, "courses", id));
      setCourses(courses.filter((course) => course.id !== id));
      alert(" Course deleted!");
    } catch (err) {
      console.error(err);
      alert(" Failed to delete course");
    }
  };

  if (!isAdmin) return null;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white p-6 space-y-6">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <nav className="space-y-3">
          {["dashboard", "courses", "users", "instructors"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`block w-full text-left p-2 rounded-lg ${
                selectedTab === tab
                  ? "bg-white text-blue-700"
                  : "hover:bg-blue-600"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-10">
        {/* Dashboard */}
        {selectedTab === "dashboard" && (
          <div>
            <h2 className="text-3xl font-bold mb-6"> Admin Overview</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-gray-600">Total Courses</h3>
                <p className="text-2xl font-semibold">{courses.length}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-gray-600">Total Users</h3>
                <p className="text-2xl font-semibold">{users.length}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-gray-600">Total Instructors</h3>
                <p className="text-2xl font-semibold">{instructors.length}</p>
              </div>
            </div>
          </div>
        )}

        {/* Courses */}
        {selectedTab === "courses" && (
          <div>
            <h2 className="text-3xl font-bold mb-6">📚 Manage Courses</h2>
            <form
              onSubmit={handleAddCourse}
              className="bg-white p-6 rounded-lg shadow mb-8 space-y-4"
            >
              <input
                type="text"
                placeholder="Course Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border p-3 rounded"
              />
              <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border p-3 rounded"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full border p-3 rounded"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                {loading ? "Adding..." : "Add Course"}
              </button>
            </form>

            <div className="grid grid-cols-3 gap-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white p-4 rounded-lg shadow text-center"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-40 object-cover rounded"
                  />
                  <h3 className="text-lg font-semibold mt-3">{course.title}</h3>
                  <p className="text-sm text-gray-500">{course.category}</p>
                  <button
                    onClick={() => handleDeleteCourse(course.id)}
                    className="mt-3 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-900"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Users */}
        {selectedTab === "users" && <UsersList users={users} />}

        {/* Instructors Management */}
        {selectedTab === "instructors" && (
          <div>
            <h2 className="text-3xl font-bold mb-6">👩‍🏫 Manage Instructors</h2>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Instructor Applications</h3>
              {applications.length === 0 ? (
                <p>No applications yet.</p>
              ) : (
                <div className="space-y-4">
                  {applications.map((app) => (
                    <div
                      key={app.id}
                      className="border border-gray-200 rounded-lg p-4 flex justify-between items-center"
                    >
                      <div>
                        <h4 className="font-semibold text-blue-700">{app.name}</h4>
                        <p className="text-sm text-gray-600">{app.email}</p>
                        <p className="text-sm text-gray-500">
                          Expertise: {app.expertise}
                        </p>
                        <p
                          className={`text-xs font-medium mt-1 ${
                            app.status === "approved"
                              ? "text-green-600"
                              : app.status === "rejected"
                              ? "text-red-600"
                              : "text-yellow-600"
                          }`}
                        >
                          Status: {app.status}
                        </p>
                      </div>
                      <div className="space-x-2">
                        <button
                          onClick={() => handleApproveInstructor(app)}
                          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleRejectInstructor(app)}
                          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
