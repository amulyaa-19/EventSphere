import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/LogIn";
import Register from "./pages/Register";
import HeroSection from "./sections/HeroSection";
import EventsSection from "./sections/EventSection";
import FeatureSection from "./sections/FeatureSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const location = useLocation();

  const hideNavAndFooter = ["/login", "/register", "/dashboard", "/admin"].includes(
    location.pathname
  );
  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <EventsSection />
              <FeatureSection />
              <HowItWorksSection />
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin"
          element={
              <AdminDashboard/>
          }  
        />
      </Routes>
    </>
  );
}

export default App;
