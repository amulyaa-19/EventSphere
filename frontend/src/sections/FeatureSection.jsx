import SpotlightCard from "../SpotlightCard/SpotlightCard";
import { ShieldCheck, MousePointerClick, Wrench, Compass } from "lucide-react";

const features = [
  {
    icon: <MousePointerClick className="w-7 h-7 text-pink-400" />,
    title: "One-Click Registration",
    description:
      "Register for college events with just a click — no clutter, no confusion, just a seamless experience built for speed and clarity.",
  },
  {
    icon: <Compass className="w-7 h-7 text-purple-400" />,
    title: "Explore Campus Life",
    description:
      "Dive into the heart of your college experience — discover tech summits, cultural nights, and startup fairs all in one central place.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-rose-400" />,
    title: "Verified Events Only",
    description:
      "Every event listed is verified by trusted campus organizers to ensure quality, credibility, and safety for all participants.",
  },
  {
    icon: <Wrench className="w-7 h-7 text-yellow-400" />,
    title: "Built by Students",
    description:
      "Designed and developed by students, for students — every feature is made with real needs in mind and tested in real college scenarios.",
  },
];

const FeatureSection = () => {
  return (
    <section
      id="features"
      className="py-24 px-6 bg-gradient-to-b from-[#1a1a1a] via-[#111] to-black text-white"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500">
        Why EventSphere?
      </h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-base md:text-lg">
        We’re not just another event site. EventSphere is built for students,
        with the features that matter the most.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <SpotlightCard
            key={index}
            className="min-h-[260px] p-6 sm:p-8 hover:shadow-pink-500/10"
            spotlightColor="rgba(255, 255, 255, 0.08)"
          >
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
