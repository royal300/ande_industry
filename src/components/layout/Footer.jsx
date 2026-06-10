import { useState } from 'react';
import { Link } from 'react-router-dom';

const FooterHeading = ({ children }) => (
  <p
    className="col-heading mb-5 font-semibold"
    style={{
      fontFamily: 'Barlow, sans-serif',
      fontSize: 12,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: '#ffffff',
    }}
  >
    {children}
  </p>
);

const socialLinks = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { label: 'Technology', href: '/technology' },
  { label: 'Products', href: '/products' },
  { label: 'Performance', href: '/performance' },
  { label: 'Services', href: '/services' },
  { label: 'Innovation', href: '/innovation' },
  { label: 'About Us', href: '/company' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <footer style={{ background: '#0d1b2a', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Brand */}
          <div>
            <Link to="/" className="inline-block mb-5">
              <img src="/logo.png" alt="ANDE Industries" style={{ height: '64px', width: 'auto', objectFit: 'contain' }} />
            </Link>
            <div className="space-y-1" style={{ color: '#aaaaaa', fontSize: 13, lineHeight: 1.8 }}>
              <p>Ande Industries Pvt. Ltd.</p>
              <p>Merlin Infinite, DN 51, Unit No.1303,</p>
              <p>13th Floor, Sector V, Salt Lake,</p>
              <p>Kolkata 700091</p>
              <p className="mt-3">
                <a
                  href="tel:+919836064375"
                  className="transition-colors duration-200"
                  style={{ color: '#aaaaaa' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#aaaaaa'; }}
                >
                  +91 9836064375
                </a>
              </p>
              <p className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: '#888', fontSize: 12 }}>
                Mother Company:<br />
                <span style={{ color: '#aaaaaa' }}>Ande Metallurgical Machinery Co. Ltd.,<br />Jinan, China</span>
              </p>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="footer-link block"
                    style={{ color: '#aaaaaa', fontSize: 14 }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Social Channels */}
          <div>
            <FooterHeading>Social Channels</FooterHeading>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="flex items-center gap-3 transition-colors duration-200"
                    style={{ color: '#aaaaaa' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#aaaaaa'; }}
                  >
                    {social.icon}
                    <span style={{ fontSize: 14 }}>{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Newsletter */}
          <div>
            <FooterHeading>Stay Updated</FooterHeading>
            <p style={{ color: '#aaaaaa', fontSize: 13, lineHeight: 1.7 }}>
              Subscribe to get the latest industry news and project updates from ANDE Industries.
            </p>

            {submitted ? (
              <div
                className="mt-4 py-3 px-4 rounded text-sm"
                style={{ background: 'rgba(30,95,163,0.2)', color: '#7eb3f0', border: '1px solid rgba(30,95,163,0.3)' }}
              >
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="newsletter-input w-full px-4 py-2 text-sm text-white outline-none focus:border-blue-500 transition-colors"
                  style={{
                    background: 'transparent',
                    border: '1px solid #444',
                    color: '#fff',
                    borderRadius: 2,
                  }}
                />
                <button
                  type="submit"
                  className="btn-primary w-full py-2 mt-2 text-white text-xs font-semibold uppercase tracking-wider transition-colors duration-250"
                  style={{
                    background: '#1e5fa3',
                    letterSpacing: '1px',
                    borderRadius: 2,
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#154f8a'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#1e5fa3'; }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p style={{ color: '#555', fontSize: 12 }}>
            © 2024 ANDE Metallurgical Machinery Equipment Co., Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4" style={{ fontSize: 12 }}>
            <a
              href="#"
              className="transition-colors duration-200"
              style={{ color: '#555' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#aaa'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#555'; }}
            >
              Privacy Policy
            </a>
            <span style={{ color: '#333' }}>|</span>
            <a
              href="#"
              className="transition-colors duration-200"
              style={{ color: '#555' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#aaa'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#555'; }}
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
