import { ProfileData } from "../../data/profile";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="text-center border-t-4 ">
        <h2>{ProfileData.personal.name}</h2>
        <p>&copy; {currentYear} My Portfolio</p>
        <p>Built with ❤️ using React</p>
      </div>
    </footer>
  );
};

export default Footer;
