import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../../components/common/PageHero';
import PrimaryButton from '../../components/common/PrimaryButton';
import { technologyData } from '../../data/technologyData';
import { productsData } from '../../data/productsData';

export default function TechnologyDetailPage() {
  const { slug } = useParams();
  const tech = technologyData.find((t) => t.slug === slug);
  const [activeTab, setActiveTab] = useState('overview');

  // Related products based on category or just first 3
  const relatedProducts = productsData.filter(p => p.category.includes(tech?.category) || true).slice(0, 3);

  if (!tech) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Barlow, sans-serif' }}>Technology Not Found</h1>
          <PrimaryButton label="Back to Technology" href="/technology" variant="filled" />
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero
        title={tech.title}
        subtitle=""
        breadcrumb={`Home / Technology / ${tech.title}`}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Tab Bar */}
          <div className="flex items-center gap-8 mb-12 border-b border-[#e0e0e0]">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'features', label: 'Technical Features' },
              { id: 'application', label: 'Application' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="pb-4 transition-colors duration-200"
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontSize: '16px',
                  fontWeight: activeTab === tab.id ? '600' : '500',
                  color: activeTab === tab.id ? '#1e5fa3' : '#666',
                  borderBottom: `3px solid ${activeTab === tab.id ? '#1e5fa3' : 'transparent'}`,
                  marginBottom: '-1px' // to overlap the border-b
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                  <h3 className="text-[28px] font-bold mb-6 text-[#1a1a2a]" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    {tech.title} Description
                  </h3>
                  <p className="text-[16px] text-[#555] leading-[1.8] mb-8">
                    {tech.description}
                  </p>
                  
                  <h4 className="font-bold text-[20px] mb-4 text-[#1a1a2a]" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    Key Advantages
                  </h4>
                  <ul className="space-y-4">
                    {tech.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e5fa3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                        </div>
                        <span className="text-[15px] text-[#444] leading-[1.6]">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Right Placeholder Image */}
                <div className="w-full h-[400px] bg-[#0d1b2a] rounded-sm flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, transparent 1px, transparent 20px)' }} />
                  <span className="text-white font-bold tracking-widest uppercase opacity-50" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    Technology Overview Diagram
                  </span>
                </div>
              </div>
            )}

            {/* FEATURES TAB */}
            {activeTab === 'features' && (
              <div className="flex flex-col">
                {[1, 2, 3].map((block, i) => (
                  <div 
                    key={block} 
                    className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 py-12 items-center`}
                    style={{ borderBottom: i < 2 ? '1px solid #f0f0f0' : 'none' }}
                  >
                    <div className="flex-1">
                      <h4 className="text-[24px] font-bold mb-4 text-[#1a1a2a]" style={{ fontFamily: 'Barlow, sans-serif' }}>
                        Advanced Feature {block}
                      </h4>
                      <p className="text-[16px] text-[#555] leading-[1.7]">
                        Our proprietary engineering approach ensures maximum efficiency and longevity. By utilizing state-of-the-art materials and optimized fluid dynamics, this feature significantly reduces operational downtime and maintenance costs.
                      </p>
                    </div>
                    <div className="flex-1 w-full md:w-auto h-[250px] bg-[#f5f7fa] border border-[#e8e8e8] rounded-sm flex items-center justify-center">
                      <span className="text-[#999] text-sm uppercase tracking-wider font-semibold">Detailed Schematic {block}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* APPLICATION TAB */}
            {activeTab === 'application' && (
              <div>
                <h3 className="text-[24px] font-bold mb-8 text-[#1a1a2a]" style={{ fontFamily: 'Barlow, sans-serif' }}>
                  Industrial Applications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { name: 'Steel Industry', icon: '⚙️' },
                    { name: 'Power Generation', icon: '⚡' },
                    { name: 'Mining & Minerals', icon: '🪨' },
                    { name: 'Chemical Process', icon: '🧪' }
                  ].map(ind => (
                    <div 
                      key={ind.name}
                      className="p-8 text-center rounded-sm transition-transform duration-300 hover:-translate-y-1"
                      style={{ border: '1px solid #1e5fa3', background: '#f5f7fa' }}
                    >
                      <div className="text-4xl mb-4">{ind.icon}</div>
                      <h4 className="font-bold text-[#1e5fa3] text-[18px]" style={{ fontFamily: 'Barlow, sans-serif' }}>{ind.name}</h4>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Bottom CTA Strip */}
          <div className="mt-20 px-8 py-10 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: '#0d1b2a' }}>
             <div>
               <h4 className="text-white text-[24px] font-bold mb-2" style={{ fontFamily: 'Barlow, sans-serif' }}>
                 Interested in this technology?
               </h4>
               <p className="text-[15px] text-white opacity-80">
                 Contact our engineering team to discuss how we can implement this solution for your plant.
               </p>
             </div>
             <PrimaryButton label="CONTACT US" href="/company/contact" variant="white-outlined" />
          </div>

          {/* Related Products Section */}
          <div className="mt-20">
            <h3 className="text-[24px] font-bold mb-8 text-[#1a1a2a]" style={{ fontFamily: 'Barlow, sans-serif' }}>
              Related Products
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map(p => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="block bg-white border border-[#e8e8e8] rounded-sm overflow-hidden group hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-[180px] bg-gradient-to-br from-[#0d1b2a] to-[#1e5fa3] flex items-center justify-center">
                    <span className="text-white opacity-40 text-sm font-semibold uppercase">{p.category} Image</span>
                  </div>
                  <div className="p-6">
                    <span className="text-[11px] font-bold text-[#1e5fa3] uppercase tracking-[1px] block mb-2">{p.category}</span>
                    <h4 className="text-[18px] font-bold text-[#1a1a2a] mb-2 group-hover:text-[#1e5fa3] transition-colors" style={{ fontFamily: 'Barlow, sans-serif' }}>{p.title}</h4>
                    <p className="text-[14px] text-[#666] line-clamp-2">{p.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
