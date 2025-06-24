import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import EventsSection from "./sections/EventSection";
import FeatureSection from "./sections/FeatureSection";
import HeroSection from "./sections/HeroSection";
import HowItWorksSection from "./sections/HowItWorksSection";

function App() {
  return (
    <>
        <div>
          <Navbar />
          <HeroSection />
          <EventsSection />
          <FeatureSection/>
          <HowItWorksSection/>
          <Footer/>
        </div>
    </>
  );
}

export default App;
