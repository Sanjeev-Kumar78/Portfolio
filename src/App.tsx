import NavBar from "./components/layout/NavBar";
import Hero from "./components/sections/Hero";
import ArrowUp from "./components/ui/ArrowUp";

const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <ArrowUp />
      </main>
    </div>
  );
};

export default App;
