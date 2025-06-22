import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LogIn, LogOut, User } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="w-full px-6 py-3 fixed top-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10 h-15">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
     
        <Link to="/" className="text-white font-semibold text-3xl ">
          EventSphere
        </Link>

        
        <div className="flex items-center gap-6 text-lg text-gray-300 ">
          <Link to="/events" className="hover:text-white transition">
            Events
          </Link>

    
          {user?.role === "admin" && (
            <Link to="/admin" className="hover:text-white transition">
              Admin
            </Link>
          )}

          
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-gray-400">
                <User size={18} />
                <span>{user.name}</span>
              </div>
              <button
                onClick={logout}
                className="hover:text-red-400 transition flex items-center gap-1"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="hover:text-white transition flex items-center gap-1"
            >
              <LogIn size={18} />
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
