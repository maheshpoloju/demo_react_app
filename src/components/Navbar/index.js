import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import "./index.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const hamburgerIcon = isNavExpanded ? <ImCross /> : <GiHamburgerMenu />;
  const handleExpandedNavMenu = () => {
    setIsNavExpanded(false);
  };
  return (
    <nav className="navigation">
      <Link
        to="/"
        className="brand-name nav-link"
        onClick={() => setIsNavExpanded(false)}
      >
        Demo
      </Link>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {hamburgerIcon}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <NavLink
              to="/link_1"
              className="nav-link"
              onClick={handleExpandedNavMenu}
              style={({ isActive }) => ({
                color: isActive ? "Blue" : "#545e6f",
              })}
            >
              Link 1
            </NavLink>
          </li>

          <li className="dropdown">
            <NavLink
              to="/link_2"
              className="nav-link"
              onClick={handleExpandedNavMenu}
              style={({ isActive }) => ({
                color: isActive ? "Blue" : "#545e6f",
              })}
            >
              Link 2
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/link_3"
              className="nav-link"
              onClick={handleExpandedNavMenu}
              style={({ isActive }) => ({
                color: isActive ? "Blue" : "#545e6f",
              })}
            >
              Link 3
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
