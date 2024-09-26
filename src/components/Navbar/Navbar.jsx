// import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
      <div className="navigation-bar">
        <nav className="nav">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
      
            </ul>
        </nav>
      </div>
  );
};

export default Navbar;
