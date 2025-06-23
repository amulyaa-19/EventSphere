import "./App.css";
import Navbar from "./components/Navbar";
import EventsSection from "./sections/EventSection";
import FeatureSection from "./sections/FeatureSection";
import HeroSection from "./sections/HeroSection";

function App() {
  return (
    <>
        <div className="">
          <Navbar />
          <HeroSection />
          <EventsSection />
          <FeatureSection/>
        </div>
    </>
  );
}

export default App;
