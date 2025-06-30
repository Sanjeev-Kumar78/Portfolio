import React from "react";
import "../../styles/SocialButton.css";

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-button"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default SocialButton;
