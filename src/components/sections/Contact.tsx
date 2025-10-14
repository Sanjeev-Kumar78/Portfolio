import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ProfileData } from "../../data/profile";
import SocialButton from "../ui/SocialButton";
import { HiOutlineEnvelope, HiOutlineGlobeAlt } from "react-icons/hi2";
import { FaLinkedin, FaGithub, FaTelegram, FaDiscord } from "react-icons/fa";
import "../../styles/Contact.css";
import LaptopBoy from "../../assets/images/projects/laptop_boy.webp";

// Define the type for the form data
type FormData = {
  name: string;
  title: string;
  email: string;
  message: string;
};

const environment = import.meta.env;
emailjs.init({
  publicKey: environment.VITE_EMAILJS_PUBLIC_KEY || "",
  blockHeadless: true,
  limitRate: {
    id: "contact-form",
    throttle: 10000,
  },
});

// Create social links array from profile data
const socialLinks = [
  {
    name: "Email",
    url: `mailto:${ProfileData.personal.contact.email}`,
    icon: <HiOutlineEnvelope />,
  },
  {
    name: "Website",
    url: ProfileData.personal.contact.website,
    icon: <HiOutlineGlobeAlt />,
  },
  {
    name: "LinkedIn",
    url: ProfileData.personal.contact.linkedin,
    icon: <FaLinkedin />,
  },
  {
    name: "GitHub",
    url: ProfileData.personal.contact.github,
    icon: <FaGithub />,
  },
  {
    name: "Telegram",
    url: ProfileData.personal.contact.telegram,
    icon: <FaTelegram />,
  },
  {
    name: "Discord",
    url: ProfileData.personal.contact.discord,
    icon: <FaDiscord />,
  },
];

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Function to handle form submission
  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const form = formRef.current;
      if (!form) {
        throw new Error("Form reference is not set");
      }
      // Create a FormData object from the form
      const formData = new FormData(form);
      const data: FormData = {
        name: formData.get("name") as string,
        title: formData.get("subject") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
      };
      // Validate form data
      // Check if required fields are filled
      if (!data.name || !data.email || !data.message) {
        setError("Please fill in all required fields.");
        setIsSubmitted(false);
        return;
      }

      // Validate name length
      if (data.name.length < 2) {
        setError("Name is too short. Please enter your full name.");
        setIsSubmitted(false);
        return;
      }

      // Validate message length
      if (data.message.length < 10) {
        setError("Please provide a more detailed message.");
        setIsSubmitted(false);
        return;
      }

      const response = await emailjs.send(
        environment.VITE_EMAILJS_SERVICE_ID,
        environment.VITE_EMAILJS_TEMPLATE_ID,
        data
      );
      if (response.status === 200) {
        setIsSubmitted(true);
        form.reset(); // Reset the form after successful submission
      }
    } catch (error) {
      setError("Failed to send message. Please try again later.");
      setIsSubmitted(false);
      console.error("Error submitting form:", error);
    }
  };

  // Timeout for info message
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isSubmitted) {
        setIsSubmitted(false);
      }
      if (error) {
        setError(null);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [isSubmitted, error]);

  return (
    <section className="contact-container" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <p className="section-description">
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Feel free to reach out!
      </p>
      <div className="info">
        {isSubmitted && (
          <div className="submission-message">
            <p>Thank you for your message! I will get back to you soon.</p>
          </div>
        )}
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}
      </div>
      <div className="contact-content">
        <form ref={formRef} className="contact-form" onSubmit={submitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            autoComplete="name"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            autoComplete="email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            autoComplete="off"
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
        <div className="social-links">
          <div className="laptop-boy">
            <img
              src={LaptopBoy}
              alt="Laptop Boy"
              className="laptop-boy-image"
              loading="lazy"
              width="200"
              height="200"
              decoding="async"
            />
          </div>
          <p className="social-links-text">
            You can also find me on these platforms:
          </p>
          <div className="social-buttons-grid">
            {socialLinks.map((link) => (
              <SocialButton
                key={link.name}
                href={link.url}
                label={link.name}
                icon={link.icon}
              />
            ))}
            <iframe
              src="https://github.com/sponsors/Sanjeev-Kumar78/button"
              title="Sponsor Sanjeev-Kumar78"
              height="32"
              width="114"
              style={{ border: "0", borderRadius: "6px" }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
