import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import "./App.css";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import ScrollingBrands from "./components/ScrollingBrands";
import Flow from "./components/Flow";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,              // 100ms is too fast for UX
      once: false,                // allow repeat on scroll
      easing: "ease-out-cubic",
      offset: 40,
      mirror: false,              // IMPORTANT: prevents reverse flicker
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Highlights />
        <Flow />
        <Testimonials />
        <ScrollingBrands />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}

export default App;
