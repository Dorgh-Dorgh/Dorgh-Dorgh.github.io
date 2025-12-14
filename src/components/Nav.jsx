import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Nav({ theme, onToggle }){
  const base = import.meta.env.BASE_URL || "./";
  const icon = base + "assets/img/dorgh_icon_D.png";

  return (
    <header>
      <div className="container">
        <div className="nav">
          <a className="brand" href="#/">
            <img src={icon} alt="D icon" />
            <span>DORGH</span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            <NavLink to="/" end className={({isActive}) => isActive ? "active" : undefined}>Home</NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? "active" : undefined}>Projects</NavLink>
            <NavLink to="/research/react2shell" className={({isActive}) => isActive ? "active" : undefined}>Research</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "active" : undefined}>Contact</NavLink>
            <ThemeToggle theme={theme} onToggle={onToggle} />
          </nav>
        </div>
      </div>
    </header>
  );
}
