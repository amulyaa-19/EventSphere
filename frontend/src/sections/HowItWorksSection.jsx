import { Search, MousePointerClick, Calendar, Users } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: <Search className="w-8 h-8 text-purple-400" />,
    title: "Discover Events",
    description:
      "Browse through verified college events happening around your campus. Filter by category, date, or your interests.",
  },
  {
    step: "02",
    icon: <MousePointerClick className="w-8 h-8 text-pink-400" />,
    title: "Register Instantly",
    description:
      "Click to register for any event that catches your eye. No lengthy forms or complicated processes.",
  },
  {
    step: "03",
    icon: <Calendar className="w-8 h-8 text-rose-400" />,
    title: "Track Registration",
    description:
      "Keep track of all your events in one organized My Bookings Section.",
  },
  {
    step: "04",
    icon: <Users className="w-8 h-8 text-yellow-400" />,
    title: "Connect & Enjoy",
    description:
      "Attend events, meet like-minded people, and make the most of your college experience.",
  },
];

const HowItWorksSection = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-[#1a1a1a] via-[#111] to-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Get started with EventSphere in just four simple steps and transform
            your college experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-white/10 mb-6 group-hover:border-pink-500/50 transition-colors">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {item.step}
                </span>
              </div>

              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Ready to get started?</p>
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 text-white font-semibold shadow-lg hover:scale-105">
            <a href="register">Join EventSphere Now</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
