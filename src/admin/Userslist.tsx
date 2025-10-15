import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");
  const [editingUser, setEditingUser] = useState<User | null>(null);

  // ✅ Fetch users
  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const usersList: User[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<User, "id">),
    }));
    setUsers(usersList);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ✅ Add new user
  const handleAddUser = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) return alert("Please fill in all fields.");

    await addDoc(collection(db, "users"), {
      name,
      email,
      role,
      createdAt: new Date(),
    });

    setName("");
    setEmail("");
    setRole("student");
    alert("User added successfully!");
    fetchUsers();
  };

  // ✅ Delete user
  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    await deleteDoc(doc(db, "users", id));
    setUsers(users.filter((u) => u.id !== id));
  };

  // ✅ Start editing
  const handleEdit = (user: User) => {
    setEditingUser(user);
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
  };

  // ✅ Update user
  const handleUpdateUser = async (e: FormEvent) => {
    e.preventDefault();
    if (!editingUser) return;

    const userRef = doc(db, "users", editingUser.id);
    await updateDoc(userRef, { name, email, role });

    alert("User updated successfully!");
    setEditingUser(null);
    setName("");
    setEmail("");
    setRole("student");
    fetchUsers();
  };

  // ✅ Cancel editing
  const cancelEdit = () => {
    setEditingUser(null);
    setName("");
    setEmail("");
    setRole("student");
  };

  return (
    <div className="p-6 bg-white shadow rounded-xl max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">
        {editingUser ? "Edit User" : "Add New User"}
      </h2>

      <form
        onSubmit={editingUser ? handleUpdateUser : handleAddUser}
        className="flex flex-col sm:flex-row gap-3 mb-6"
      >
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <select
          value={role}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setRole(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
          <option value="admin">Admin</option>
        </select>

        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {editingUser ? "Update" : "Add"}
          </button>

          {editingUser && (
            <button
              type="button"
              onClick={cancelEdit}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <h3 className="text-xl font-semibold mb-3 text-blue-600">All Users</h3>
      <table className="w-full border-collapse border text-left">
        <thead>
          <tr className="bg-blue-50">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((u) => (
              <tr key={u.id}>
                <td className="border p-2">{u.name}</td>
                <td className="border p-2">{u.email}</td>
                <td className="border p-2 capitalize">{u.role}</td>
                <td className="border p-2 text-center space-x-2">
                  <button
                    onClick={() => handleEdit(u)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(u.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="border p-4 text-center text-gray-500">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
