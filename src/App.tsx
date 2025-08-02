import NavBar from "./components/layout/NavBar";
import Hero from "./components/sections/Hero";
import SEO from "./components/SEO";
import ArrowUp from "./components/ui/ArrowUp";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { lazy, Suspense } from "react";

// Lazy load components that are not immediately visible
const About = lazy(() => import("./components/sections/About"));
const Project = lazy(() => import("./components/sections/Project"));
const Contact = lazy(() => import("./components/sections/Contact"));
const Footer = lazy(() => import("./components/layout/Footer"));
// Loading fallback component
const ComponentLoader = ({ name }: { name: string }) => (
  <div
    className="component-loading"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "200px",
      opacity: 0.7,
      fontSize: "14px",
      color: "#a855f7",
    }}
  >
    Loading {name}...
  </div>
);

const App = () => {
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
        <Suspense fallback={<ComponentLoader name="About Section" />}>
          <About />
        </Suspense>
        <Suspense fallback={<ComponentLoader name="Projects" />}>
          <Project />
        </Suspense>
        <Suspense fallback={<ComponentLoader name="Contact Form" />}>
          <Contact />
        </Suspense>
        <ArrowUp />
      </main>
      <Suspense fallback={<ComponentLoader name="Footer" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
