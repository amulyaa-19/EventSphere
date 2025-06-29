import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventCard from "../components/EventCard";
import Modal from "../components/Modal";
import axios from "axios";
import { CalendarDays, LogOut, Calendar, X } from "lucide-react";
import EventRegistrationForm from "../components/EventRegistrationForm";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registeringEvent, setRegisteringEvent] = useState(null);

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
      {/* 🔲 Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-0" />

      <aside className="w-64 bg-white/5 border-r border-white/10 p-6 hidden md:flex flex-col gap-8 z-10">
        <div>
          <h2 className="text-xl font-bold mb-10 flex items-center gap-2">
            <Calendar className="w-5 h-5" /> EventSphere
          </h2>

          <ul className="space-y-6 text-md">
            <li className="hover:text-pink-400 cursor-pointer transition flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              Dashboard
            </li>
            {/* <li className="hover:text-pink-400 cursor-pointer transition flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              My Events
            </li> */}
            <li
              onClick={handleLogout}
              className="hover:text-pink-400 cursor-pointer transition flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </li>
          </ul>
        </div>
      </aside>

      <main className="flex-1 p-6 z-10 overflow-y-auto items-center text-center">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white mb-1">Hello, {user?.name}</h2>
          <p className="text-gray-400 text-md">
            Browse and register for upcoming events.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              onViewDetails={setSelectedEvent}
            />
          ))}
        </div>

        {selectedEvent && (
          <Modal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
            onRegisterClick={() => {
              setSelectedEvent(null);
              setRegisteringEvent(selectedEvent);
            }}
          />
        )}

        {registeringEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4">
            <div className="bg-white/10 border border-white/20 p-6 rounded-2xl max-w-lg w-full text-white relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setRegisteringEvent(null)}
                className="absolute top-4 right-4 text-white hover:text-pink-400 transition"
              >
                <X className="cursor-pointer"/>
              </button>
              <h2 className="text-xl font-bold mb-4 text-center">
                Event Registration
              </h2>
              <EventRegistrationForm event={registeringEvent} user={user} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
