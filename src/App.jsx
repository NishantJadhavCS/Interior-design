import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import "./App.css";
import Highlights from "./components/Highlights";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Highlights />
      </main>
    </>
  );
}

export default App;
