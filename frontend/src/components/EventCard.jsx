import { Calendar, MapPin, IndianRupee } from "lucide-react";

const EventCard = ({ event, onViewDetails }) => {
  return (
    <div
      className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-500/20 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm"
    >
      <img
        src={event.image || "https://res.cloudinary.com/dtuhhy4ys/image/upload/v1750258403/event-images/pjv5mfsl6w2zthvcgmn9.png"}
        alt={event.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-4 space-y-2 text-white">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold">{event.title}</h3>
          {event.category && (
            <span className="text-xs bg-pink-600 px-2 py-1 rounded-full">
              {event.category}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-300">
          <Calendar className="w-4 h-4" />
          {new Date(event.date).toLocaleDateString()}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-300">
          <MapPin className="w-4 h-4" />
          {event.venue || event.location || "TBA"}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-300">
          <IndianRupee className="w-4 h-4" />
          {event.price}
        </div>

        <button
          onClick={() => onViewDetails(event)}
          className="w-full mt-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 py-2 rounded-md font-semibold text-sm cursor-pointer"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;
