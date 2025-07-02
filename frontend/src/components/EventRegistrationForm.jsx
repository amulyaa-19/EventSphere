import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { getAuth } from "firebase/auth";
import app from "../firebase";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const EventRegistrationForm = ({ event }) => {
  const auth = getAuth(app);
  const currentUser = auth.currentUser;

  const [formData, setFormData] = useState({
    name: currentUser?.displayName || "",
    email: currentUser?.email || "",
    college: "",
    mobile: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = auth.currentUser;

      if (!user) {
        toast.error("You must be logged in to register.");
        setLoading(false);
        return;
      }

      const token = await user.getIdToken();

      const res = await axios.post(
        `${BASE_URL}/api/event/register`,
        {
          ...formData,
          eventId: event._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(res.data.message || "Registered successfully!");
    } catch (err) {
      console.error("Registration error:", err);
      toast.error(err.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  const inputFields = [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "college", label: "College", type: "text" },
    { name: "mobile", label: "Mobile", type: "text" },
  ];

  return (
    <form
      onSubmit={handleRegister}
      className="space-y-5 mt-4 w-full max-w-md mx-auto"
    >
      {inputFields.map(({ name, label, type }) => (
        <div key={name}>
          <label className="block text-sm text-gray-300 mb-1">{label}</label>
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-md bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-pink-500"
          />
        </div>
      ))}

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded-md text-white font-semibold transition 
          ${
            loading
              ? "bg-white/20 cursor-not-allowed"
              : "bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500"
          }`}
      >
        {loading ? "Registering..." : "Register Now"}
      </button>
    </form>
  );
};

export default EventRegistrationForm;
