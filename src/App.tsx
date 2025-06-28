import NavBar from "./components/layout/NavBar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import ArrowUp from "./components/ui/ArrowUp";

const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <About />
        <ArrowUp />
      </main>
    </div>
  );
};

export default App;
