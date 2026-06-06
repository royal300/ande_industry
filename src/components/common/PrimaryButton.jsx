import { Link } from 'react-router-dom';

export default function PrimaryButton({ label, href, onClick, variant = 'filled', type = 'button' }) {
  const baseStyle = {
    display: 'inline-block',
    padding: '12px 32px',
    fontSize: 13,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontWeight: 600,
    fontFamily: 'Barlow, sans-serif',
    borderRadius: 3,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.25s ease',
    border: '2px solid transparent',
  };

  const variants = {
    filled: {
      normal: { background: '#1e5fa3', color: '#fff', borderColor: '#1e5fa3' },
      hover: { background: '#154f8a', borderColor: '#154f8a', transform: 'translateY(-1px)', boxShadow: '0 4px 12px rgba(30,95,163,0.3)' },
    },
    outlined: {
      normal: { background: 'transparent', color: '#1e5fa3', borderColor: '#1e5fa3' },
      hover: { background: '#1e5fa3', color: '#fff', borderColor: '#1e5fa3', transform: 'translateY(-1px)' },
    },
    'white-outlined': {
      normal: { background: 'transparent', color: '#fff', borderColor: '#fff' },
      hover: { background: '#fff', color: '#0d1b2a', borderColor: '#fff', transform: 'translateY(-1px)' },
    },
  };

  const v = variants[variant] || variants.filled;

  const handleMouseEnter = (e) => {
    Object.assign(e.currentTarget.style, v.hover);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.currentTarget.style, { ...v.normal, transform: 'translateY(0)', boxShadow: 'none' });
  };

  const handleMouseDown = (e) => {
    e.currentTarget.style.transform = 'scale(0.97)';
  };

  const handleMouseUp = (e) => {
    e.currentTarget.style.transform = 'translateY(-1px)';
  };

  const combinedStyle = { ...baseStyle, ...v.normal };
  const events = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
  };

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel');
    if (isExternal) {
      return (
        <a href={href} style={combinedStyle} {...events} className="btn-primary">
          {label}
        </a>
      );
    }
    return (
      <Link to={href} style={combinedStyle} {...events} className="btn-primary">
        {label}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} style={combinedStyle} {...events} className="btn-primary">
      {label}
    </button>
  );
}
