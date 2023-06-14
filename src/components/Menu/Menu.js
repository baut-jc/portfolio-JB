import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

export const Menu = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <nav className="menu-nav">
      <div className="menu-links">
        <NavLink exact to="/" activeClassName="active" onClick={() => setIsChecked(false)}>Home</NavLink>
        <NavLink to="/about" activeClassName="active" onClick={() => setIsChecked(false)}>About</NavLink>
        <NavLink to="/projects" activeClassName="active" onClick={() => setIsChecked(false)}>Projects</NavLink>
        {/* <NavLink to="/contact" activeClassName="active" onClick={() => setIsChecked(false)}>Contact</NavLink> */}
      </div>
    </nav>
  )
}
