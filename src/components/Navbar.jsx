import React from 'react';
import { Icons } from './Icons';
import { LOGO_URL } from '../data';

const Navbar = ({ scrolled, menuOpen, setMenuOpen, active, scrollTo }) => (
  <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
    <div className="nav-inner">
      <div className="logo-container" onClick={() => scrollTo('home')}>
        <img src={LOGO_URL} alt="Code On JVM" className="nav-logo-img" />
        {/* TEXT REMOVED as requested */}
      </div>
      <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        {['Home', 'About', 'Work', 'Events', 'Join', 'Sponsors', 'Team', 'Contact'].map(item => (
          <button key={item} className={`nav-link ${active === item.toLowerCase() ? 'active' : ''}`} onClick={() => scrollTo(item.toLowerCase())}>
            {item}
          </button>
        ))}
      </div>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <Icons.Close /> : <Icons.Menu />}
      </button>
    </div>
  </nav>
);
export default Navbar;