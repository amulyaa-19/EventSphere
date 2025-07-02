import { X, Calendar, MapPin, BadgeInfo } from "lucide-react";
import { useState } from "react";


const Modal = ({ event, onClose, onRegisterClick }) => {
  const user = JSON.parse(localStorage.getItem("user"));
 
  if (!event) return null;

  const formattedDate = new Date(event.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-2xl max-w-2xl w-full text-white relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-pink-400 transition"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold mb-4 text-center">{event.title}</h2>

        <div className="flex flex-wrap gap-4 text-sm mb-6 justify-center text-gray-300">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{event.location || "TBD"}</span>
          </div>
          <div className="flex items-center gap-2">
            <BadgeInfo className="w-4 h-4" />
            <span>{event.category || "General"}</span>
          </div>
        </div>

        <div className="text-center mb-6">
          <p className="text-gray-400 text-sm">
            <span className="text-white font-semibold">Organized by:</span>{" "}
            {event.organizer || "EventSphere Team"}
          </p>
          <p className="text-gray-400 text-sm">
            <span className="text-white font-semibold">Entry Fee:</span>{" "}
            ₹{event.price}
          </p>
        </div>

        <div className="bg-white/5 p-4 rounded-lg border border-white/10 text-sm text-gray-200 mb-6">
          <h3 className="font-semibold text-white mb-2">Event Description</h3>
          <p>{event.description || "No description provided."}</p>
        </div>

        <div className="text-center">
          <button
            onClick={onRegisterClick}
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 px-6 py-2 rounded-md font-semibold text-white shadow-md transition cursor-pointer"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
