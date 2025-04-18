import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TimelineDemo } from "./components/TimelineDemo";
import { Logos3 } from "./components/logos3";
import TracksSlider from "./components/Tracks";
import SplineScreen from "./components/SplineScene";
import AboutUs from "./components/3dCarousel";
import figurine from "/tracks.svg";
import { SparklesPreviewDark } from "./components/Sparkles";
import { SponsorCarousel } from "./components/SponsorCarousel";
import "./App.css";
import {
  SparklesPreview,
  SparklesPreviewColorful,
} from "./components/Sparkles";
import { Spline } from "lucide-react";
import { motion } from "framer-motion";
import SparkleBg from "./components/SparkleEffect";
import { SparklesCore } from "./components/ui/sparkles";
import Footer from "./components/Footer";
import FAQAccordion from "./components/Accordian";
import { PricingDemo } from "./components/Prices";
// App.jsx - Updated structure
function App() {
  return (
    <div
      id="home"
      className="min-h-screen relative bg-black overflow-x-hidden w-screen"
    >
      {/* Global sparkle background - higher z-index than -1 but lower than content */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <SparklesCore
          id="global-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={150}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.3}
          opacity={0.3}
        />
      </div>

      {/* Hero section - no need for its own sparkles background */}
      <div className="z-0">
        <SparklesPreviewDark />
      </div>

      <Navbar />

      {/* Other sections with z-10 or higher to appear above sparkles */}
      <div id="about" className="z-0 flex justify-center items-center w-full mt-16">
        <AboutUs />
      </div>

      <div id="timeline" className="bg-transparent z-0 w-full">
        <TimelineDemo />
      </div>

{/* <div className="">
  <TracksSlider />
</div> */}

      <div className="">
        <PricingDemo />
      </div>

      {/* Partners Section */}
      <div id="partners" className="z-0 bg-transparent">
        <section>
          <SponsorCarousel />
        </section>
      </div>

      <div id="faq" className="z-0 bg-transparent">
        <FAQAccordion />
      </div>

      <div className="z-0">
        <Footer />
      </div>
    </div>
  );
}


export default App;
