import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/common/PageHero';
import { productsData } from '../../data/productsData';

const categories = ['All', 'Crushing', 'Grinding', 'Metering', 'PCI Systems', 'Dedusting', 'Drying', 'Calcining', 'Conveying', 'Thermal'];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? productsData
    : productsData.filter((p) => p.category === activeCategory || p.category.includes(activeCategory));

  return (
    <>
      <PageHero
        title="Products"
        subtitle="Advanced equipment engineered for precision and durability"
        breadcrumb="Home / Products"
      />

      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 text-[14px] font-semibold rounded-sm transition-all duration-200"
                style={{
                  background: activeCategory === cat ? '#1e5fa3' : 'transparent',
                  color: activeCategory === cat ? '#ffffff' : '#666666',
                  border: `1px solid ${activeCategory === cat ? '#1e5fa3' : '#cccccc'}`,
                  fontFamily: 'Barlow, sans-serif'
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== cat) {
                    e.currentTarget.style.borderColor = '#1e5fa3';
                    e.currentTarget.style.color = '#1e5fa3';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== cat) {
                    e.currentTarget.style.borderColor = '#cccccc';
                    e.currentTarget.style.color = '#666666';
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${product.slug}`}
                className="block bg-white border border-[#e8e8e8] rounded-sm overflow-hidden group transition-all duration-300 hover:shadow-lg"
              >
                {/* Visual header */}
                <div
                  className="h-[180px] flex items-center justify-center relative bg-[#f5f7fa]"
                  style={{
                    background: 'linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 100%)',
                  }}
                >
                  <span className="text-white opacity-30 text-sm tracking-wider uppercase font-semibold">
                    {product.title} Image
                  </span>
                </div>

                <div className="p-6 flex flex-col justify-between" style={{ minHeight: '160px' }}>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-[1px] mb-2" style={{ color: '#1e5fa3' }}>
                      {product.category}
                    </span>
                    <h3
                      className="font-bold text-[18px] text-[#1a1a2a] group-hover:text-[#1e5fa3] transition-colors leading-[1.3] mb-3"
                      style={{ fontFamily: 'Barlow, sans-serif' }}
                    >
                      {product.title}
                    </h3>
                  </div>
                  
                  <div
                    className="mt-4 text-[13px] font-semibold uppercase flex items-center transition-transform group-hover:translate-x-1"
                    style={{ color: '#1e5fa3', letterSpacing: '0.5px' }}
                  >
                    Learn More <span className="ml-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
            
            {filtered.length === 0 && (
              <div className="col-span-full text-center text-[#666] py-12">
                No products found for the selected category.
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
