import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems as navData } from '../../data/navData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const handleMouseEnter = (title) => {
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };
  
  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 w-full" style={{ background: '#0d1b2a', height: '72px' }}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-sm flex items-center justify-center" style={{ background: '#1e5fa3' }}>
            <span className="text-white font-bold text-xl" style={{ fontFamily: 'Barlow, sans-serif' }}>A</span>
          </div>
          <span className="text-white font-bold text-xl tracking-wide" style={{ fontFamily: 'Barlow, sans-serif' }}>
            ANDE<span style={{ color: '#1e5fa3' }}>.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex h-full items-center space-x-1">
          {navData.map((item) => (
            <div
              key={item.title}
              className="h-full px-4 flex items-center relative group"
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={item.href}
                className="text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
                style={{ 
                  color: isActive(item.href) ? '#ffffff' : '#cccccc',
                  borderBottom: isActive(item.href) ? '2px solid #1e5fa3' : '2px solid transparent',
                  paddingBottom: '23px', // Adjust to align border to bottom of navbar
                  marginTop: '25px'
                }}
                onMouseEnter={(e) => { if (!isActive(item.href)) e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={(e) => { if (!isActive(item.href)) e.currentTarget.style.color = '#cccccc'; }}
              >
                {item.title}
              </Link>

              {/* Mega Menu Dropdown */}
              {item.dropdown && activeDropdown === item.title && (
                <div 
                  className="absolute top-[72px] left-1/2 -translate-x-1/2 w-max min-w-[600px] bg-white shadow-2xl rounded-b-sm border-t border-gray-100 p-8 grid grid-cols-2 gap-8"
                  style={{ animation: 'fadeSlideUp 0.2s ease-out forwards' }}
                >
                  {item.dropdown.map((column, idx) => (
                    <div key={idx}>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#1e5fa3' }}>
                        {column.heading}
                      </h4>
                      <ul className="space-y-3">
                        {column.items.map((subItem) => (
                          <li key={subItem.label}>
                            <Link 
                              to={subItem.href}
                              className="text-sm text-gray-700 hover:text-blue-700 transition-colors block"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col p-4 max-h-[80vh] overflow-y-auto">
          {navData.map((item) => (
            <div key={item.title} className="mb-4">
              <Link 
                to={item.href}
                className="block text-lg font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'Barlow, sans-serif' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
              {item.dropdown && (
                <div className="pl-4 border-l-2 border-gray-100 space-y-4">
                  {item.dropdown.map((column, idx) => (
                    <div key={idx}>
                      <span className="block text-xs font-bold uppercase text-gray-500 mb-2">{column.heading}</span>
                      <ul className="space-y-2">
                        {column.items.map((subItem) => (
                          <li key={subItem.label}>
                            <Link 
                              to={subItem.href}
                              className="block text-sm text-gray-600"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
