import { Calendar, MapPin } from "lucide-react";
const EventCard = ({ event }) => (
  <div className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-pink-500/30 transition-all duration-300 hover:scale-105">
    <div className="relative">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-4 right-4 flex items-center justify-center">
        <span className="px-3 py-1 bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-md rounded-full text-xs font-medium text-white ">
          {event.category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
      <div className="flex items-center text-gray-400 text-sm mb-3">
        <Calendar className="w-4 h-4 mr-2" />
        {event.date}
      </div>
      <div className="flex items-center text-gray-400 text-sm mb-4">
        <MapPin className="w-4 h-4 mr-2" />
        {event.venue}
      </div>
      <button
        href="/login"
        className="w-full py-2 border-1 hover:bg-white/10 rounded-lg text-white font-medium transition-all duration-300"
      >
        View More
      </button>
    </div>
  </div>
);

export default EventCard;
