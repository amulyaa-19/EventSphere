import { LucideLogIn } from "lucide-react";
import EventCard from "../components/EventCard";
import { useState } from "react";

const categories = ["All", "Tech", "Cultural", "Miscellaneous"];

const events = [
  {
    id: 1,
    title: "Hackathon 2025",
    date: "June 30, 2025",
    image: "https://source.unsplash.com/400x250/?technology,hackathon",
    category: "Tech",
  },
  {
    id: 2,
    title: "Cultural Fest",
    date: "July 5, 2025",
    image: "https://res.cloudinary.com/dtuhhy4ys/image/upload/v1750258403/event-images/pjv5mfsl6w2zthvcgmn9.png",
    category: "Cultural",
  },
  {
    id: 3,
    title: "Startup Pitch",
    date: "July 12, 2025",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde15", 
    category: "Business",
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
            className={`px-4 py-1 rounded-full border ${
              selectedCategory === cat
                ? "border-pink-500 bg-white/10 text-pink-400"
                : "border-white/10 bg-white/5 text-gray-300 hover:text-white"
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 z-10 relative">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      <div className="mt-12 text-center z-10 relative ">
        <a
          href="/login"
          className=" text-sm md:text-base text-pink-400 hover:text-pink-500 transition font-semibold underline underline-offset-4 flex items-center justify-center "
        >
          See more events  <LucideLogIn className="ml-2"/>
        </a>
      </div>
    </section>
  );
};

export default EventsSection;
