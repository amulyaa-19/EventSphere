const EventCard = ({ event }) => {
  return (
    <div className="bg-[#111111] rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:shadow-pink-500/20 transition-transform duration-300 hover:scale-105 text-gray-200 w-full max-w-sm mx-auto">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-52 object-cover rounded-t-2xl"
      />

      <div className="p-5 flex flex-col justify-between h-[220px]">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">{event.title}</h3>

          <p className="text-sm text-gray-400">{event.date}</p>

          <span className="inline-block px-3 py-1 text-xs rounded-full bg-white/10 text-pink-400 font-medium backdrop-blur-sm border border-pink-500/30">
            {event.category}
          </span>
        </div>

        <button className="mt-4 py-2 rounded-lg bg-white/10 text-sm font-semibold text-white hover:bg-pink-500/10 hover:text-pink-400 transition-colors border border-white/10">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;
