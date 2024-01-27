// Bringing in the required import from 'react-router-dom'
import { NavLink } from 'react-router-dom';


export default function Navigation() {
  // The Navbar UI component will render each of the NavLink elements in the NavLinks prop
  return (
    <nav>
      <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/">About Me</NavLink>
      <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/portfolio">Portfolio</NavLink>
      <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/contact">Contact</NavLink>
      <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/resume">Resume</NavLink>
    </nav>
  );
}



