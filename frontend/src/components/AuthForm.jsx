import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const AuthForm = ({ type = "register", onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
    if (type === "register") {
      const res = await axios.post(`${BASE_URL}/api/auth/register`, formData);
  
      toast.success("Registered successfully!");

      navigate("/login");
    }

    if(type === "login") {
      const res = await axios.post(`${BASE_URL}/api/auth/login`, formData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success("Login Sucessful!");
      navigate("/dashboard");
    }
    
  } catch (err) {
    toast.error(err.response?.data?.message || "Something went wrong. Try again.");
  }
};

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {type === "register" && (
        <div>
          <label
            htmlFor="name"
            className="block text-xl font-medium text-gray-300 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="w-full px-4 py-2 rounded-md bg-white/10 text-white font-normal text-xl placeholder-gray-400 placeholder:text-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500 "
          />
        </div>
      )}
      <div>
        <label
          htmlFor="email"
          className="block text-xl font-medium text-gray-300 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="sample@gmail.com"
          className="w-full px-4 py-2 font-normal  text-xl rounded-md bg-white/10 text-white placeholder-gray-400 border placeholder:text-md border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-xl font-medium text-gray-300 mb-1 "
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          id="password"
          onChange={handleChange}
          placeholder="********"
          className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400  placeholder:text-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-2 border-1 hover:bg-white/10 transition rounded-md text-white font-semibold"
      >
        {type === "register" ? "Sign Up" : "Log In"}
      </button>
    </form>
  );
};

export default AuthForm;
