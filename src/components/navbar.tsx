import { useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar bg-primary-black w-screen fixed top-0 z-10">
      <a className="btn btn-ghost text-xl text-primary-blue">Kasabian</a>

      <div className="navbar-end w-full text-primary-white lg:hidden">
        <div className="dropdown dropdown-end">
          {/* Button to toggle dropdown */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* Dropdown content */}
          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content bg-secondary-blue rounded-box z-[1] mt-3 w-96 shadow"
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a>Skills</a>
              </li>
              <li>
                <a>Service</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>Contact Me</a>
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className="navbar-end w-full hidden lg:flex text-primary-white">
        <ul className="menu menu-horizontal px-5">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
          <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="service" smooth={true} duration={500}>
              Service
            </Link>
          </li>
          <li>
          <Link to="portofolio" smooth={true} duration={500}>
              Portofolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
