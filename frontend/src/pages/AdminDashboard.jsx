import axios from "axios";
import { Calendar, MapPin, Pencil, IndianRupee, Eye, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import CreateEventModal from "../components/CreateEventModal";
import EditEventModal from "../components/EditEventModal";

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [adminEvents, setAdminEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const [showEditModal, setShowEditModal] = useState(false);
  const [eventToEdit, setEventToEdit] = useState(null);

  const openEditModal = (event) => {
    setEventToEdit(event);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setEventToEdit(null);
  };

  useEffect(() => {
    const fetchAdminEvents = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${BASE_URL}/api/admin/events`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAdminEvents(res.data.events);
        console.log("Fetched admin events:", res.data.events);
      } catch (err) {
        console.error("Error fetching admin event:", err);
      }
    };
    fetchAdminEvents();
  }, []);

  return (
    <div
      className="min-h-screen flex bg-no-repeat bg-cover bg-center text-white relative"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dtuhhy4ys/image/upload/v1750258403/event-images/pjv5mfsl6w2zthvcgmn9.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-0" />

      <aside className="w-64 bg-white/5 border-white/10 p-6 hidden md:flex flex-col gap-8 z-10">
        <h2 className="text-2xl font-bold mb-5 mt-5">Admin Panel</h2>
        <ul className="space-y-4 text-md">
          <li className="hover:text-pink-400 cursor-pointer">Create Event</li>
          <li className="hover:text-pink-400 cursor-pointer">All Events</li>
          <li className="hover:text-pink-400 cursor-pointer">Logout</li>
        </ul>
      </aside>

      <div className="flex-1 p-8 z-10 overflow-y-auto w-full">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">All Events</h1>
          <button
            onClick={toggleModal}
            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-500 transition px-4 py-2 rounded-md text-sm font-semibold cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Create Event
          </button>
        </div>

        <CreateEventModal
          showModal={showModal}
          toggleModal={toggleModal}
          onEventCreated={(newEvent) =>
            setAdminEvents([newEvent, ...adminEvents])
          }
        />

        <EditEventModal
          showModal={showEditModal}
          toggleModal={closeEditModal}
          eventData={eventToEdit}
          onEventUpdated={(updatedEvent) => {
            const updatedList = adminEvents.map((e) =>
              e._id === updatedEvent._id ? updatedEvent : e
            );
            setAdminEvents(updatedList);
          }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminEvents.map((event) => (
            <div
              key={event._id}
              className="bg-white/10 border border-white/20 rounded-2xl shadow-md hover:shadow-xl transition text-white backdrop-blur-lg overflow-hidden"
            >
              <img
                src={
                  event.image ||
                  "https://res.cloudinary.com/dtuhhy4ys/image/upload/v1751310194/pexels-eberhardgross-1421903_xnbakj.jpg"
                }
                alt={event.title}
                className="w-full h-60 object-cover rounded-t-2xl border-b border-white/20 sm:h-64"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{event.title}</h3>

                <div className="flex items-center gap-2 text-sm mb-2 text-gray-300">
                  <Calendar className="w-4 h-4" />
                  {new Date(event.date).toLocaleDateString()}
                </div>

                <div className="flex items-center gap-2 text-sm mb-2 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  {event.location || "No location"}
                </div>

                <div className="flex items-center gap-2 text-sm mb-4 text-gray-300">
                  <IndianRupee className="w-4 h-4" />
                  {event.price === "0" || event.price === 0
                    ? "Free"
                    : event.price}
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => openEditModal(event)}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded-md text-sm font-medium cursor-pointer"
                  >
                    <Pencil className="w-4 h-4" />
                    Edit
                  </button>

                  <button
                    onClick={() => console.log("View Bookings", event._id)}
                    className="flex items-center gap-2 bg-pink-600 hover:bg-pink-500 transition px-4 py-2 rounded-md text-sm font-medium cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    View Bookings
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
