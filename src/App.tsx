import NavBar from "./components/layout/NavBar";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import Hero from "./components/sections/Hero";
import ArrowUp from "./components/ui/ArrowUp";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  return (
    <div>
      <SpeedInsights />
      <NavBar />
      <main>
        <Hero />
        <About />
        <Project />
        <Contact />
        <ArrowUp />
      </main>
      <Footer />
    </div>
  );
};

export default App;
