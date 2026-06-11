import { Link } from 'react-router-dom';
import PageHero from '../../components/common/PageHero';
import { productCategories } from '../../data/productCategoryData';

// Category icons (SVG path data)
const categoryIcons = {
  'crushing-sizing': 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
  'grinding': 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  'metering-conveying': 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
  'pci-furnace-kiln': 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z',
  'environmental-dedusting': 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
  'thermal-drying': 'M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z',
  'calcining-smelting': 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
};

const categoryColors = [
  '#1e5fa3',
  '#0f4c81',
  '#1a6b5a',
  '#7c3238',
  '#5c4a1e',
  '#1a4f6b',
  '#4a2d6b',
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products"
        subtitle="Advanced equipment engineered for precision, reliability and durability across metallurgical and industrial processes."
        breadcrumb="Home / Products"
      />

      <section style={{ background: '#f8f9fa', paddingTop: '4rem', paddingBottom: '5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Section label */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#1e5fa3',
              fontFamily: 'Barlow, sans-serif',
              marginBottom: '10px',
            }}>
              PRODUCT PORTFOLIO
            </p>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#1a1a2a',
              fontFamily: 'Barlow, sans-serif',
              lineHeight: 1.2,
              marginBottom: '12px',
            }}>
              Our Product Categories
            </h2>
            <p style={{ fontSize: '16px', color: '#6b7280', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              Select a category below to explore our complete range of industrial equipment.
            </p>
          </div>

          {/* Category grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}>
            {productCategories.map((cat, idx) => (
              <CategoryCard key={cat.slug} category={cat} color={categoryColors[idx % categoryColors.length]} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

function CategoryCard({ category, color }) {
  const icon = categoryIcons[category.slug];

  return (
    <Link
      to={`/products/category/${category.slug}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        style={{
          background: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          overflow: 'hidden',
          transition: 'box-shadow 0.2s ease, transform 0.2s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
          e.currentTarget.style.transform = 'translateY(-3px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {/* Color bar top */}
        <div style={{ height: '5px', background: color }} />

        <div style={{ padding: '1.75rem' }}>
          {/* Icon */}
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '10px',
            background: `${color}15`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
          }}>
            <svg width="26" height="26" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d={icon} />
            </svg>
          </div>

          {/* Count badge */}
          <span style={{
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: color,
            fontFamily: 'Barlow, sans-serif',
            display: 'block',
            marginBottom: '6px',
          }}>
            {category.products.length} {category.products.length === 1 ? 'Product' : 'Products'}
          </span>

          {/* Title */}
          <h3 style={{
            fontSize: '19px',
            fontWeight: '700',
            color: '#1a1a2a',
            fontFamily: 'Barlow, sans-serif',
            lineHeight: 1.3,
            marginBottom: '8px',
          }}>
            {category.title}
          </h3>

          {/* Subtitle */}
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            lineHeight: 1.6,
            marginBottom: '1.25rem',
          }}>
            {category.subtitle}
          </p>

          {/* CTA */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: color,
            fontSize: '13px',
            fontWeight: '700',
            fontFamily: 'Barlow, sans-serif',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            View Products
            <svg width="14" height="14" fill="none" stroke={color} strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
