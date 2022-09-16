
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import {
  Link
} from "react-router-dom";

import { AiFillCaretDown } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';


import './index.css'

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  // const [showNavbarDropDown, setShowNavbarDropDown] = useState(false)
  
  const hamburgerIcon = isNavExpanded ? <ImCross /> : <GiHamburgerMenu />
  const handleExpandedNavMenu = () => {
    setIsNavExpanded(false)

  }
  return (
    <nav className="navigation">
      
      <Link to="/" className='brand-name nav-link' 
        onClick={() => setIsNavExpanded(false)}
      >
        SP DisciplesCare
      </Link>
      <button 
          className="hamburger" 
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}
        >
        {hamburgerIcon}
      </button>
      <div
        className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
      
          <li>
            <NavLink
              to="/about"
              className='nav-link'
              onClick={handleExpandedNavMenu}
              style={({ isActive }) => ({
                color: isActive ? 'Blue' : '#545e6f',
              })}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/covid-care" 
              className='nav-link'
              onClick={handleExpandedNavMenu}
              style={({ isActive }) => ({
                color: isActive ? 'Blue' : '#545e6f',
              })}
            >
              Covid Care
            </NavLink>
          </li>
          
          <li className="dropdown">
            <NavLink
              to="/acute-care" 
              className='nav-link'
              onClick={handleExpandedNavMenu}
              style={({ isActive }) => ({
                color: isActive ? 'Blue' : '#545e6f',
              })}
            >
              Acute Care 
            </NavLink>
          </li>
          
          <li>
            
            <NavLink
                  to="/general-consultation"
                  className='nav-link'
                  onClick={handleExpandedNavMenu}
                  style={({ isActive }) => ({
                    color: isActive ? 'Blue' : '#545e6f',
                  })}
                >
                General Consultation
              </NavLink>
          </li>
          <li>
            
            <NavLink
                  to="/medication-refill" 
                  className='nav-link'
                  onClick={handleExpandedNavMenu}
                  style={({ isActive }) => ({
                    color: isActive ? 'Blue' : '#545e6f',
                  })}
                >
                Medication refill
              </NavLink>
          </li>
          <li>
            
            <NavLink
                  to="/registration" 
                  className='nav-link'
                  onClick={handleExpandedNavMenu}
                  style={({ isActive }) => ({
                    color: isActive ? 'Blue' : '#545e6f',
                  })}
                >
                Registration
              </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}