import PageHero from '../../components/common/PageHero';
import { technologyData } from '../../data/technologyData';

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        title="Technology Solutions"
        subtitle="High-performance proprietary equipment and engineering systems for the global market"
        breadcrumb="Home / Technology"
      />

      <section style={{ background: '#f8f9fa', paddingTop: '3rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          
          {/* Section Heading */}
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#1e5fa3',
              fontFamily: 'Barlow, sans-serif',
              marginBottom: '6px',
            }}>
              Core Capabilities
            </p>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#1a1a2a',
              fontFamily: 'Barlow, sans-serif',
              lineHeight: 1.25,
              borderLeft: '4px solid #1e5fa3',
              paddingLeft: '14px',
            }}>
              Our Technology Portfolio
            </h2>
          </div>

          {/* Technology list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {technologyData.map((tech, idx) => (
              <div
                key={tech.slug}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
                  transition: 'box-shadow 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 1px 6px rgba(0,0,0,0.06)'; }}
                className="product-card-row"
              >
                {/* Image */}
                <div
                  style={{
                    width: '280px',
                    minWidth: '280px',
                    height: '200px',
                    flexShrink: 0,
                    overflow: 'hidden',
                    background: '#e8ecf0',
                    position: 'relative',
                  }}
                  className="product-img-wrap"
                >
                  <img
                    src={tech.image}
                    alt={tech.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    onError={e => {
                      e.target.style.display = 'none';
                      e.target.parentNode.style.background = 'linear-gradient(135deg, #0d1b2a, #1a3a5c)';
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    flex: 1,
                    padding: '2rem 2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '0.75rem',
                  }}
                  className="product-card-content"
                >
                  {/* Technology number badge */}
                  <span style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#1e5fa3',
                    fontFamily: 'Barlow, sans-serif',
                  }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: '#1a1a2a',
                      fontFamily: 'Barlow, sans-serif',
                      lineHeight: 1.3,
                      margin: 0,
                    }}
                  >
                    {tech.title}
                  </h3>

                  {/* Divider */}
                  <div style={{ width: '40px', height: '3px', background: '#1e5fa3', borderRadius: '2px' }} />

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '15px',
                      color: '#4b5563',
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
