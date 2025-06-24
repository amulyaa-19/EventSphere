import { LucideLogIn, Calendar } from "lucide-react";
import { useState } from "react";
import EventCard from "../components/EventCard";

const categories = ["All", "Tech", "Cultural", "Business", "Sports"];

const events = [
  {
    id: 1,
    title: "Hackathon 2025",
    date: "June 30, 2025",
    venue: "Tech Hub, Block A",
    image:
      "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041859.jpg",
    category: "Tech",
  },
  {
    id: 2,
    title: "Cultural Fest",
    date: "July 5, 2025",
    venue: "Main Auditorium",
    image:
      "https://thumbs.dreamstime.com/b/rock-concert-large-group-happy-people-enjoying-clapping-raised-up-hands-blue-lights-stage-new-year-celebration-46521228.jpg",
    category: "Cultural",
  },
  {
    id: 3,
    title: "Startup Pitch",
    date: "July 12, 2025",
    venue: "Business Center",
    image:
      "https://burst.shopifycdn.com/photos/business-meeting-over-coffee.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    category: "Business",
  },
  {
    id: 4,
    title: "AI Workshop",
    date: "July 18, 2025",
    venue: "Computer Lab 1",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    category: "Tech",
  },
  {
    id: 5,
    title: "Dance Competition",
    date: "July 25, 2025",
    venue: "Sports Complex",
    image: "https://images.unsplash.com/photo-1540479859555-17af45c78602",
    category: "Cultural",
  },
  {
    id: 6,
    title: "Cricket Tournament",
    date: "August 1, 2025",
    venue: "College Ground",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da",
    category: "Sports",
  },
];

const EventsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((e) => e.category === selectedCategory);

  return (
    <section
      id="events"
      className="py-20 px-4 w-screen mx-auto bg-gradient-to-r from-black via-[#111] to-[#1a1a1a] text-white relative"
    >
      <div className="absolute inset-0 bg-gradient-radial from-pink-500/5 via-transparent to-transparent pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 animate-gradient-x leading-tight z-10 relative">
          Upcoming Events
        </h2>

        <p className="text-center text-gray-400 max-w-xl mx-auto mb-10 text-sm md:text-base z-10 relative">
          Discover hand-picked events happening across your campus – from tech
          fests to cultural nights.
        </p>

        <div className="flex justify-center flex-wrap gap-4 mb-12 text-sm z-10 relative">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                selectedCategory === cat
                  ? "border-pink-500 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-pink-400 scale-105"
                  : "border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
              {selectedCategory === cat && (
                <span className="ml-2 text-xs">
                  (
                  {selectedCategory === "All"
                    ? events.length
                    : filteredEvents.length}
                  )
                </span>
              )}
            </button>
          ))}
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10 relative">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 z-10 relative">
            <div className="w-16 h-16 mx-auto mb-4 bg-white/5 rounded-full flex items-center justify-center">
              <Calendar className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              No events found
            </h3>
            <p className="text-gray-400">
              No {selectedCategory.toLowerCase()} events available right now.
              Check back soon!
            </p>
          </div>
        )}
        <div className="mt-12 text-center z-10 relative">
          <a
            href="/login"
            className="inline-flex items-center text-sm md:text-base text-pink-400 hover:text-pink-500 transition font-semibold underline underline-offset-4"
          >
            See more events
            <LucideLogIn className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
