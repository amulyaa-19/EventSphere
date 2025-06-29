import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventCard from "../components/EventCard";
import Modal from "../components/Modal";
import axios from "axios";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);

  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    document.title = "Dashboard | EventSphere";

    const fetchEvents = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/events`
        );
        setEvents(res.data);
      } catch (err) {
        console.error("Failed to fetch events:", err);
      }
    };

    fetchEvents();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen flex bg-no-repeat bg-cover bg-center text-white relative"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dtuhhy4ys/image/upload/v1750258403/event-images/pjv5mfsl6w2zthvcgmn9.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-0" />

      <aside className="w-64 bg-white/5 border-r border-white/10 p-6 hidden md:block z-10">
        <h2 className="text-xl font-bold mb-8">EventSphere</h2>
        <ul className="space-y-4 text-md">
          <li className="hover:text-pink-400 cursor-pointer transition">
            Dashboard
          </li>
          <li className="hover:text-pink-400 cursor-pointer transition">
            My Events
          </li>
          <li className="hover:text-pink-400 cursor-pointer transition">
            Settings
          </li>
          <li
            onClick={handleLogout}
            className="hover:text-pink-400 cursor-pointer transition"
          >
            Logout
          </li>
        </ul>
      </aside>

      <main className="flex-1 p-6 z-10">
        <h1 className="text-3xl font-semibold mb-2">
          Welcome, {user?.name || "Guest"}
        </h1>
        <p className="text-gray-400 mb-6 text-lg">Role: {user?.role || "NA"}</p>

        <div className="bg-white/10 p-6 rounded-lg shadow-md max-w-2xl">
          <h2 className="text-xl font-semibold mb-2">Your Dashboard</h2>
          <p>This will show events you’ve joined or can manage (if admin).</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {events.map((event) => (
            <EventCard key={event._id} event={event} onViewDetails={setSelectedEvent}/>
          ))}
        </div>
        {selectedEvent && (
          <Modal event={selectedEvent} onClose={()=> setSelectedEvent(null)}/>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
