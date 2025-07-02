import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dtuhhy4ys/image/upload/v1750258403/event-images/pjv5mfsl6w2zthvcgmn9.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-0"></div>

      <div className="relative z-10 p-6 md:p-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-gray-100">
          Discover & Create <br />
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-transparent bg-clip-text animate-pulse">
            Amazing College Events
          </span>
        </h1>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Book, explore and organize your college’s coolest events — all in one
          place.
          <br /> Dive into{" "}
          <span className="text-pink-400 font-medium">EventSphere</span>.
        </p>

        <a href='#events'>
          <button className="mt-6 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 text-white text-base font-semibold shadow-lg hover:scale-105 animate-pulse cursor-pointer">
            Explore Events <ArrowRight className="w-5 h-5" />
          </button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
