import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: '/' },         // absolute to router root (respects basename)
    { name: 'About', to: 'about' },    // relative paths
    { name: 'Experience', to: 'experience' },
    { name: 'Resume', to: 'resume' }
  ];

  const linkClass = ({ isActive }) => `nav-link ${isActive ? 'active' : ''}`;
  const mobileLinkClass = ({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`;

  return (
    <nav className="portfolio-nav">
      <div className="nav-content">
        <div className="nav-inner">
          {/* Logo → home */}
          <NavLink to="/" className="portfolio-logo" end>Portfolio</NavLink>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.to} className={linkClass} end={item.to === '/'}>
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen((o) => !o)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={mobileLinkClass}
                end={item.to === '/'}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
