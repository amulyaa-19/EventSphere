import { X, Calendar, MapPin, BadgeInfo } from "lucide-react";
import { useState } from "react";

const Modal = ({ event, onClose }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const[formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email,
    college: "",
    mobile:"",
  })

  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-2xl max-w-2xl w-full text-white relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-pink-400 transition"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold mb-3">{event.title}</h2>

        <div className="flex flex-wrap gap-4 text-sm mb-6 text-gray-300">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {event.date}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {event.venue}
          </div>
          <div className="flex items-center gap-2">
            <BadgeInfo className="w-4 h-4" />
            {event.category}
          </div>
        </div>

        <p className="mb-4 text-gray-300 text-sm">
          <span className="font-semibold text-white">Organized by:</span> {event.organizer}
        </p>

        <p className="mb-4 text-gray-300 text-sm">
          <span className="font-semibold text-white">Entry Fee:</span> ₹{event.price}
        </p>

        <div className="bg-white/5 p-4 rounded-lg border border-white/10 text-sm text-gray-200">
          <h3 className="font-semibold text-white mb-2">Event Description</h3>
          <p>{event.description}</p>
        </div>

        <div className="mt-6 text-right">
          <button
            onClick={() => alert("Open registration form here")}
            className="px-5 py-2 rounded-md border-1 hover:bg-white/5 transition text-white font-semibold"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
