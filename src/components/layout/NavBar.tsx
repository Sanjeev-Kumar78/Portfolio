import { useEffect, useState } from "react";
import { HiHome, HiFolder, HiInformationCircle, HiMail } from "react-icons/hi";
import "../../styles/NavBar.css";
import type { ReactElement } from "react";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  // Function to update title based on active section
  const updateTitle = (section: string) => {
    const titleElement = document.querySelector("title");
    if (titleElement) {
      titleElement.textContent = `My Portfolio - ${
        section.charAt(0).toUpperCase() + section.slice(1)
      }`;
    }
  };
  useEffect(() => {
    updateTitle(activeSection);
  }, [activeSection]);
  // Function to handle scroll and update active section
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "home";

    // Find the section that's most visible in the viewport
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionId = section.getAttribute("id");

      // Check if section is past the middle of the screen
      if (rect.top <= window.innerHeight / 2) {
        currentSection = sectionId || "home";
      }
    });

    setActiveSection(currentSection);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const links: { name: string; href: string; icons: ReactElement }[] = [
    { name: "Home", href: "#home", icons: <HiHome /> },
    { name: "About", href: "#about", icons: <HiInformationCircle /> },
    { name: "Projects", href: "#projects", icons: <HiFolder /> },
    { name: "Contact", href: "#contact", icons: <HiMail /> },
  ];
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link.name} className="navbar-item">
              <a
                className={`navbar-link ${
                  activeSection === link.name.toLowerCase() ? "active" : ""
                }`}
                href={link.href}
              >
                <span className={`navbar-link-icon`}>{link.icons}</span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
