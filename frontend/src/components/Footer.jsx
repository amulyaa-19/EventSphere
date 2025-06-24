import { Link } from "react-router-dom";
import { ShieldCheck, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-white/15 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white font-semibold text-xl tracking-wide ">
          EventSphere<span className="text-pink-500">.</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-300">
          <ShieldCheck className="w-5 h-5 text-pink-500" />
          Want to host or manage events?
          <Link
            to="/contact"
            className="text-pink-400 hover:underline ml-1"
          >
            Contact us to become an admin
          </Link>
        </div>

        <div>
          <a
            href="https://github.com/amulyaa-19/event-sphere"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition flex items-center gap-1"
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline text-sm">GitHub</span>
          </a>
        </div>
      </div>
      <p className="text-xs text-center mt-8 text-gray-500">
        © {new Date().getFullYear()} EventSphere. 
      </p>
    </footer>
  );
};

export default Footer;
