import NavBar from "./components/layout/NavBar";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import Hero from "./components/sections/Hero";
import ArrowUp from "./components/ui/ArrowUp";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import SEO from "./components/SEO";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  // Set google site verification meta tag
  document.head.insertAdjacentHTML(
    "beforeend",
    `<meta
        name="google-site-verification"
        content="${import.meta.env.VITE_GOOGLE_SITE_VERIFICATION || ""}"
      />`
  );
  return (
    <div>
      {/* Global SEO - will be applied to the entire site */}
      <SEO
        title="AI & Full-Stack Developer"
        description="Computer Science Engineering student specializing in AI, Machine Learning, and full-stack development. Building scalable applications with real-world impact."
        keywords={[
          "Sanjeev Kumar",
          "AI Developer",
          "Machine Learning",
          "Full Stack Developer",
          "Python",
          "React",
          "Portfolio",
          "Computer Science",
          "Web Development",
          "Data Science",
        ]}
      />

      <Analytics />
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
