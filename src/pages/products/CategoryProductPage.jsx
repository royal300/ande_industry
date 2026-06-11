import { useParams, Link } from 'react-router-dom';
import PageHero from '../../components/common/PageHero';
import { productCategories } from '../../data/productCategoryData';

export default function CategoryProductPage() {
  const { category } = useParams();
  const categoryData = productCategories.find((c) => c.slug === category);

  if (!categoryData) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Barlow, sans-serif', fontSize: '24px', marginBottom: '16px', color: '#1a1a2a' }}>
            Category Not Found
          </h2>
          <Link
            to="/products"
            style={{
              display: 'inline-block',
              padding: '10px 28px',
              background: '#1e5fa3',
              color: '#fff',
              fontFamily: 'Barlow, sans-serif',
              fontWeight: '700',
              borderRadius: '3px',
              textDecoration: 'none',
            }}
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero
        title={categoryData.title}
        subtitle={categoryData.subtitle}
        breadcrumb={`Home / Products / ${categoryData.title}`}
      />

      <section style={{ background: '#f8f9fa', paddingTop: '3rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Back link */}
          <div style={{ marginBottom: '2rem' }}>
            <Link
              to="/products"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#1e5fa3',
                fontFamily: 'Barlow, sans-serif',
                fontWeight: '600',
                fontSize: '14px',
                textDecoration: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.75'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              All Products
            </Link>
          </div>

          {/* Section heading */}
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
              PRODUCT LIST
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
              {categoryData.title}
            </h2>
          </div>

          {/* Product list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {categoryData.products.map((product, idx) => (
              <ProductCard key={idx} product={product} idx={idx} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

function ProductCard({ product, idx }) {
  return (
    <div
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
          flexShrink: 0,
          overflow: 'hidden',
          background: '#e8ecf0',
          position: 'relative',
        }}
        className="product-img-wrap"
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            minHeight: '200px',
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
        {/* Product number badge */}
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

        {/* Product name */}
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
          {product.name}
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
          {product.description}
        </p>
      </div>
    </div>
  );
}
