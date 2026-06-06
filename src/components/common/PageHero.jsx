import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function PageHero({ title, subtitle, breadcrumb, backgroundImage }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const bgStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(135deg, rgba(13,27,42,0.85) 0%, rgba(26,58,92,0.75) 100%), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 100%)',
      };

  return (
    <section
      className="relative flex items-center hero-pattern"
      style={{ ...bgStyle, minHeight: 280 }}
    >
      {/* Diagonal pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 20px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        {breadcrumb && (
          <p
            className="mb-4"
            style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, letterSpacing: '0.5px' }}
          >
            {breadcrumb}
          </p>
        )}

        {/* Title */}
        <h1
          className="font-bold text-white"
          style={{
            fontFamily: 'Barlow, sans-serif',
            fontSize: 42,
            lineHeight: 1.2,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="mt-4"
            style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: 16,
              maxWidth: 600,
              lineHeight: 1.7,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
