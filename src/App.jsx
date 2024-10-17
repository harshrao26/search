import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Info from "./components/Info";
import HeroSection from "./components/HeroSection";
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <Info />
      <Footer />
    </div>
  );
};

export default App;
