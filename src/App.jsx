import React from "react";
import Navbar from "./components/navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Feature from "./components/Feature";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen bg-pink-200 ">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Feature />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
