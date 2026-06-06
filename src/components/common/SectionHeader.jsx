export default function SectionHeader({ label, title, subtitle, centered = false }) {
  const alignClass = centered ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClass} mb-12`}>
      {label && (
        <span className="section-label">
          {label}
        </span>
      )}
      <h2
        className="font-bold"
        style={{
          fontFamily: 'Barlow, sans-serif',
          fontSize: 32,
          color: '#1a1a2a',
          marginBottom: 12,
          lineHeight: 1.25,
        }}
      >
        {title}
      </h2>

      {/* Blue accent bar */}
      <div
        style={{
          width: 50,
          height: 3,
          background: '#1e5fa3',
          marginBottom: subtitle ? 16 : 0,
          borderRadius: 2,
        }}
      />

      {subtitle && (
        <p
          style={{
            fontSize: 16,
            color: '#666666',
            maxWidth: 640,
            lineHeight: 1.7,
            marginTop: 4,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
