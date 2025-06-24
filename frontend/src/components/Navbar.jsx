import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/30 backdrop-blur-lg border border-white/10 rounded-full px-6 py-2 w-[90%] max-w-screen flex justify-between items-center shadow-md h-14">
      <Link
        to="/"
        className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"
      >
        EventSphere
      </Link>

      <div className="hidden md:flex gap-8 text-gray-300 text-md font-medium">
        <Link to="/" className="hover:text-pink-400 transition">Home</Link>
        <Link to="/about" className="hover:text-pink-400 transition">About</Link>
        <Link to="/events" className="hover:text-pink-400 transition">Events</Link>
        <Link to="/features" className="hover:text-pink-400 transition">Features</Link>
      </div>

      <div className="flex gap-3 items-center">
        <Link
          to="/register"
          className="px-4 py-1 rounded-full bg-white/10 text-gray-300 hover:bg-white/20 transition text-md"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="px-4 py-1 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white text-md font-medium hover:from-pink-500 hover:to-purple-500 transition"
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
