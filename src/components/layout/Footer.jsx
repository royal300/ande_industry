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

// socialLinks removed

const quickLinks = [
  { label: 'Technology', href: '/technology' },
  { label: 'Products', href: '/products' },
  { label: 'Performance', href: '/performance' },
  { label: 'Services', href: '/services' },
  { label: 'Innovation', href: '/innovation' },
  { label: 'About Us', href: '/company' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0d1b2a', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Brand */}
          <div>
            <Link to="/" className="inline-block mb-5">
              <img src="/ande_logo.png" alt="ANDE Industries" style={{ height: '100px', width: '100px', objectFit: 'contain' }} />
            </Link>
            <div className="space-y-1" style={{ color: '#aaaaaa', fontSize: 13, lineHeight: 1.8 }}>
              <p className="font-semibold text-white mb-2">Ande Industries Pvt. Ltd.</p>
              <p>Merlin Infinite, DN 51, Unit No.1303,</p>
              <p>13th Floor, Sector V, Salt Lake,</p>
              <p>Kolkata 700091</p>
            </div>
          </div>

          {/* Column 2 — Parent Company */}
          <div>
            <FooterHeading>Parent Company</FooterHeading>
            <div className="space-y-3" style={{ color: '#aaaaaa', fontSize: 13, lineHeight: 1.6 }}>
              <div>
                <p className="font-semibold text-white">Ande Metallurgical Machinery Co. Ltd., Head Office</p>
                <p className="mt-1">Address: Future Square, No. 55 Industrial South Road, High-tech Zone, Jinan, China</p>
                <p>Tel: +86-531-8894 8601</p>
              </div>
              <div className="pt-2 border-t border-gray-800">
                <p className="font-semibold text-white">Works</p>
                <p className="mt-1">Address: Chengdong Industrial Park, Jingshi East Road, Zhangqiu, Jinan, China</p>
                <p>Tel: +86-531-8332 3930</p>
              </div>
              <div className="pt-2 border-t border-gray-800">
                <p>
                  Website: <a href="http://www.andeindustries.com" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">www.andeindustries.com</a>
                </p>
                <p className="mt-1">
                  Email: <a href="mailto:huangfan@andeindustries.com" className="text-blue-400 hover:text-blue-300 transition-colors">huangfan@andeindustries.com</a>
                  <br />
                  <a href="mailto:sales@andeindustries.com" className="text-blue-400 hover:text-blue-300 transition-colors">sales@andeindustries.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="footer-link block hover:text-white transition-colors duration-200"
                    style={{ color: '#aaaaaa', fontSize: 14 }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Us */}
          <div>
            <FooterHeading>Contact Us</FooterHeading>
            <div className="space-y-4" style={{ color: '#aaaaaa', fontSize: 13, lineHeight: 1.6 }}>
              <div>
                <p className="font-semibold text-white">Huang Fan</p>
                <p>Mobile: 914771157</p>
                <p>Email: <a href="mailto:huangfan@andeindustries.com" className="text-blue-400 hover:text-blue-300 transition-colors">huangfan@andeindustries.com</a></p>
              </div>
              <div className="pt-2 border-t border-gray-800">
                <p className="font-semibold text-white">Ashok Kumar Sengupta</p>
                <p>Mobile: 9937294464 / 8319158089</p>
                <p>Email: <a href="mailto:ashok@andeitpl.com" className="text-blue-400 hover:text-blue-300 transition-colors">ashok@andeitpl.com</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p style={{ color: '#555', fontSize: 12 }}>
            All Copyrights Reserved 2026 by <a href="http://www.royal300.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">ROYAL300</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
