import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // ✅ import Firestore
import { auth, db } from "../firebase/config";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // ✅ Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Update display name
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: name });
      }

      // ✅ Add user to Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        role: "student", // or 'admin' if needed
        createdAt: new Date(),
      });

      // ✅ Save to localStorage
      const userData = {
        name,
        email,
        joined: new Date(user.metadata.creationTime || "").toDateString(),
      };
      localStorage.setItem("user", JSON.stringify(userData));

      // ✅ Redirect
      navigate("/profile");
    } catch (err: any) {
      setError(err.message);
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-100">
      <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Create Your Account ✨
        </h2>

        {error && <p className="text-red-500 text-center text-sm mb-4">{error}</p>}

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 hover:underline font-semibold"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
