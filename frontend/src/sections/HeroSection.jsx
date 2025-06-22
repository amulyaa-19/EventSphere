import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dtuhhy4ys/image/upload/v1750258403/event-images/pjv5mfsl6w2zthvcgmn9.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-0"></div>

      <div className="relative z-10 p-6 md:p-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Discover & Create <br />
          <span className="text-cyan-400">Amazing College Events</span>
        </h1>

        <p className="text-gray-300 text-base md:text-lg">
          Whether you're attending or organizing events at your college,
          EventSphere helps you stay ahead and make memories that matter.
        </p>
      </div>
    </section>
  )
}

export default HeroSection;
