// App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/LogIn";
import Register from "./pages/Register";
import HeroSection from "./sections/HeroSection";
import EventsSection from "./sections/EventSection";
import FeatureSection from "./sections/FeatureSection";
import HowItWorksSection from "./sections/HowItWorksSection";

const HomeLayout = () => (
  <>
    <Navbar />
    <HeroSection />
    <EventsSection />
    <FeatureSection />
    <HowItWorksSection />
    <Footer />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/events" element={<HomeLayout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
