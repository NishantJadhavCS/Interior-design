import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import "./App.css";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Navbar_m from "./components/Navbar_m";
import Hero_m from "./components/Hero_m";
import Footer_m from "./components/Footer_m";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar_m />
      <main>
        <Hero_m />
        {/* <Hero />
        <Services />
        <Highlights />
        <Testimonials /> */}
        {/* <Footer /> */}
        <Footer_m />
      </main>
    </>
  );
}

export default App;
