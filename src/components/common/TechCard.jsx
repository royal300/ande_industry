import { Link } from 'react-router-dom';

export default function TechCard({ image, title, links = [], description, href }) {
  return (
    <div
      className="tech-card bg-white flex flex-col"
      style={{
        border: '1px solid #e8e8e8',
        borderRadius: 2,
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        overflow: 'hidden',
      }}
    >
      {/* Image Area */}
      <div style={{ height: 200, overflow: 'hidden', position: 'relative', background: '#1a3a5c' }}>
        {image ? (
          <img
            src={image}
            alt={title}
            className="tech-card-img w-full h-full object-cover"
          />
        ) : (
          /* Placeholder with industrial pattern */
          <div
            className="w-full h-full flex items-center justify-center tech-card-img"
            style={{
              background: 'linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 60%, #1e5fa3 100%)',
              position: 'relative',
            }}
          >
            {/* Industrial gear SVG placeholder */}
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity="0.3">
              <circle cx="32" cy="32" r="12" stroke="white" strokeWidth="3" fill="none"/>
              <circle cx="32" cy="32" r="4" fill="white"/>
              {[0,45,90,135,180,225,270,315].map((angle, i) => (
                <rect
                  key={i}
                  x="30" y="8"
                  width="4" height="10"
                  fill="white"
                  transform={`rotate(${angle} 32 32)`}
                  rx="1"
                />
              ))}
            </svg>
            <div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{ background: '#1e5fa3' }}
            />
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          className="tech-card-title font-semibold mb-3"
          style={{
            fontFamily: 'Barlow, sans-serif',
            fontSize: 18,
            color: '#1a1a2a',
            transition: 'color 0.3s ease',
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>

        {description && (
          <p className="text-sm mb-4 flex-1" style={{ color: '#666', lineHeight: 1.65, fontSize: 14 }}>
            {description}
          </p>
        )}

        {/* Links */}
        {links.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-auto">
            {links.map((link, i) => (
              <Link
                key={i}
                to={link.href || '#'}
                className="text-xs font-semibold uppercase transition-colors duration-150"
                style={{ color: '#1e5fa3', letterSpacing: '0.5px' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#154f8a'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#1e5fa3'; }}
              >
                {link.label} →
              </Link>
            ))}
          </div>
        )}

        {href && (
          <Link
            to={href}
            className="text-xs font-semibold uppercase transition-colors duration-150 mt-auto"
            style={{ color: '#1e5fa3', letterSpacing: '0.5px' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#154f8a'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#1e5fa3'; }}
          >
            Learn More →
          </Link>
        )}
      </div>
    </div>
  );
}
