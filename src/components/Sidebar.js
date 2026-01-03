import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <nav className="sidebar-nav">
        <NavLink to="/about" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>About</NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Services</NavLink>
        <NavLink to="/solutions" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Solutions</NavLink>
        <NavLink to="/training" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Training</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;