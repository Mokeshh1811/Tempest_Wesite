import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  const closeTimer = useRef(null);

  /* ============================= */
  /* DESKTOP DROPDOWN HANDLERS */
  /* ============================= */

  const handleMouseEnter = (menu) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 350);
  };

  const handleDropdownClick = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  /* ============================= */
  /* MOBILE HANDLERS */
  /* ============================= */

  const toggleMobileSubmenu = (menu) => {
    setMobileSubmenu(mobileSubmenu === menu ? null : menu);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="nav-header">
        <div className="nav-inner">
          <div className="nav-brand">
            <img src="/tempest-logo.png" alt="Tempest logo" className="nav-logo" />
          </div>

          <div className="nav-center desktop-only">
            <span className="nav-eyebrow">MSME • AICTE Aligned</span>
          </div>

          {/* DESKTOP NAV */}
          <div className="nav-links desktop-only">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>

            {/* SERVICES DROPDOWN */}
            <div
              className={`dropdown ${openDropdown === 'services' ? 'open' : ''}`}
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <span
                className="dropdown-toggle"
                onClick={() => handleDropdownClick('services')}
              >
                Services
              </span>

              <div
                className="dropdown-menu"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink to="/services/cloud">Web & Cloud Solutions</NavLink>
                <NavLink to="/services/ai">AI & Automation Services</NavLink>
              </div>
            </div>

            {/* TRAINING – DIRECT LINK */}
            <NavLink to="/training/bootcamps">Training</NavLink>

            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="hamburger mobile-only"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* MOBILE SIDEBAR */}
      <aside className={`mobile-sidebar ${mobileOpen ? 'open' : ''}`}>
        <button
          className="close-btn"
          onClick={() => setMobileOpen(false)}
        >
          ✕
        </button>

        <nav className="mobile-links">
          <NavLink to="/" onClick={() => setMobileOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setMobileOpen(false)}>
            About
          </NavLink>

          {/* SERVICES (MOBILE DROPDOWN) */}
          <div className="mobile-group">
            <button onClick={() => toggleMobileSubmenu('services')}>
              Services
            </button>

            {mobileSubmenu === 'services' && (
              <div className="mobile-submenu">
                <NavLink
                  to="/services/cloud"
                  onClick={() => setMobileOpen(false)}
                >
                  Cloud & Platform Engineering
                </NavLink>

                <NavLink
                  to="/services/ai"
                  onClick={() => setMobileOpen(false)}
                >
                  AI & Automation Services
                </NavLink>
              </div>
            )}
          </div>

          {/* TRAINING – DIRECT LINK */}
          <NavLink
            to="/training/bootcamps"
            onClick={() => setMobileOpen(false)}
          >
            Training
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
