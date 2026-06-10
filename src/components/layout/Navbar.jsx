import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems as navData } from '../../data/navData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const location = useLocation();

  const handleMouseEnter = (label) => {
    setActiveDropdown(label);
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
        <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
          <img src="/logo.png" alt="ANDE Industries" style={{ height: '64px', width: 'auto', objectFit: 'contain' }} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center h-full items-center space-x-1 lg:pr-[112px]">
          {navData.map((item) => (
            <div
              key={item.label}
              className="h-full px-4 flex items-center relative group"
              onMouseEnter={() => handleMouseEnter(item.label)}
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
                {item.label}
              </Link>

              {/* Mega Menu Dropdown */}
              {item.dropdown && activeDropdown === item.label && (
                <div 
                  className="absolute top-[72px] left-1/2 -translate-x-1/2 w-max min-w-[500px] bg-white shadow-2xl rounded-b-sm border-t border-gray-100 p-6"
                  style={{ animation: 'fadeSlideUp 0.2s ease-out forwards' }}
                >
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#1e5fa3' }}>
                    {item.dropdown.heading}
                  </h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
                    {item.dropdown.links.map((subItem) => (
                      <Link 
                        key={subItem.label}
                        to={subItem.href}
                        className="text-sm text-gray-700 hover:text-blue-700 transition-colors block"
                        onClick={handleMouseLeave}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                  {item.dropdown.seeAllHref && (
                    <div className="mt-4 pt-3 border-t border-gray-100 flex justify-end">
                      <Link 
                        to={item.dropdown.seeAllHref}
                        className="text-xs font-bold uppercase tracking-wider text-[#1e5fa3] hover:text-blue-800 transition-colors flex items-center gap-1"
                        onClick={handleMouseLeave}
                      >
                        See All {item.label}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
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

      {/* Mobile Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => {
          setMobileMenuOpen(false);
          setMobileActiveDropdown(null);
        }}
      />

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-y-0 left-0 z-50 w-[300px] max-w-[calc(100vw-50px)] bg-white h-screen shadow-2xl md:hidden transition-transform duration-300 ease-in-out flex flex-col ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-5 flex items-center justify-between border-b border-gray-100 bg-[#0d1b2a] text-white">
          <Link to="/" className="flex items-center" onClick={() => {
            setMobileMenuOpen(false);
            setMobileActiveDropdown(null);
          }}>
            <img src="/logo.png" alt="ANDE Industries" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
          </Link>
          <button 
            className="text-white p-1 hover:bg-white/10 rounded transition-colors"
            onClick={() => {
              setMobileMenuOpen(false);
              setMobileActiveDropdown(null);
            }}
            aria-label="Close mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-grow overflow-y-auto px-5 py-4 space-y-1">
          {navData.map((item) => {
            const hasDropdown = !!item.dropdown;
            const isDropdownOpen = mobileActiveDropdown === item.label;

            return (
              <div key={item.label} className="border-b border-gray-50 last:border-0 py-1">
                <div className="flex items-center justify-between">
                  <Link 
                    to={item.href}
                    className="block text-base font-bold text-gray-900 py-2.5 flex-grow"
                    style={{ fontFamily: 'Barlow, sans-serif' }}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileActiveDropdown(null);
                    }}
                  >
                    {item.label}
                  </Link>
                  {hasDropdown && (
                    <button
                      className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
                      onClick={() => setMobileActiveDropdown(isDropdownOpen ? null : item.label)}
                      aria-label={`Toggle ${item.label} sub-menu`}
                    >
                      <svg className={`w-5 h-5 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>

                {hasDropdown && isDropdownOpen && (
                  <div className="pl-4 pb-3 pt-1 space-y-2">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#1e5fa3] mb-2">
                      {item.dropdown.heading}
                    </span>
                    <ul className="space-y-2 border-l border-gray-100 pl-3">
                      {item.dropdown.links.map((subItem) => (
                        <li key={subItem.label}>
                          <Link 
                            to={subItem.href}
                            className="block text-sm text-gray-600 hover:text-blue-600 py-1.5 transition-colors"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileActiveDropdown(null);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                      {item.dropdown.seeAllHref && (
                        <li className="pt-1">
                          <Link 
                            to={item.dropdown.seeAllHref}
                            className="block text-sm font-semibold text-[#1e5fa3] hover:text-blue-800 py-1 transition-colors flex items-center gap-1"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileActiveDropdown(null);
                            }}
                          >
                            See All {item.label}
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Drawer Footer */}
        <div className="p-5 border-t border-gray-100 bg-gray-50 text-xs text-gray-500">
          <p>© 2026 ANDE Industry. All Rights Reserved.</p>
        </div>
      </div>
    </nav>
  );
}
