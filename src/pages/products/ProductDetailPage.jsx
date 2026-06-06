import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../../components/common/PageHero';
import PrimaryButton from '../../components/common/PrimaryButton';
import SectionHeader from '../../components/common/SectionHeader';
import { productsData } from '../../data/productsData';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = productsData.find((p) => p.slug === slug);
  const [activeTab, setActiveTab] = useState('overview');

  const relatedProducts = productsData.filter((p) => p.slug !== slug).slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Barlow, sans-serif' }}>Product Not Found</h1>
          <PrimaryButton label="Back to Products" href="/products" variant="filled" />
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero
        title={product.title}
        subtitle=""
        breadcrumb={`Home / Products / ${product.title}`}
      />

      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left Content (60%) */}
            <div className="w-full lg:w-[60%]">
              {/* Product Image Placeholder */}
              <div className="w-full h-[400px] rounded-sm mb-12 flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1b2a, #1a3a5c)' }}>
                <span className="text-white font-bold tracking-widest uppercase opacity-40 text-lg" style={{ fontFamily: 'Barlow, sans-serif' }}>
                  {product.title} Image
                </span>
                {/* Decorative lines */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0px, transparent 1px, transparent 20px)' }} />
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-8 mb-8 border-b border-[#e0e0e0]">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'specs', label: 'Specifications' },
                  { id: 'applications', label: 'Applications' }
                ].map((tab) => (
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
                      marginBottom: '-1px'
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[300px]">
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="text-[24px] font-bold mb-6 text-[#1a1a2a]" style={{ fontFamily: 'Barlow, sans-serif' }}>
                      Product Description
                    </h3>
                    <p className="text-[16px] text-[#555] leading-[1.8] mb-8">
                      {product.description} Built for continuous operation in harsh industrial environments, this equipment offers exceptional reliability and ease of maintenance.
                    </p>
                    
                    <h4 className="font-bold text-[18px] mb-4 text-[#1a1a2a]" style={{ fontFamily: 'Barlow, sans-serif' }}>
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {[
                        'Heavy-duty construction for extended service life',
                        'Optimized design for maximum energy efficiency',
                        'Easy access points for quick maintenance',
                        'Available with advanced monitoring sensors'
                      ].map((feat, i) => (
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
                )}

                {activeTab === 'specs' && (
                  <div>
                    <h3 className="text-[24px] font-bold mb-6 text-[#1a1a2a]" style={{ fontFamily: 'Barlow, sans-serif' }}>
                      Technical Data
                    </h3>
                    <div className="border border-[#e8e8e8] rounded-sm overflow-hidden">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-[#0d1b2a] text-white">
                            <th className="py-3 px-6 font-semibold text-[14px] w-1/2" style={{ fontFamily: 'Barlow, sans-serif' }}>Parameter</th>
                            <th className="py-3 px-6 font-semibold text-[14px] w-1/2" style={{ fontFamily: 'Barlow, sans-serif' }}>Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.specs.map((spec, i) => (
                            <tr key={spec.label} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff' }}>
                              <td className="py-3 px-6 text-[14px] text-[#555] font-medium border-t border-[#f0f0f0]">{spec.label}</td>
                              <td className="py-3 px-6 text-[14px] text-[#333] font-semibold border-t border-[#f0f0f0]">{spec.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'applications' && (
                  <div>
                    <h3 className="text-[24px] font-bold mb-6 text-[#1a1a2a]" style={{ fontFamily: 'Barlow, sans-serif' }}>
                      Industry Applications
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {['Steel & Iron', 'Mining', 'Cement', 'Power Generation', 'Chemicals'].map((app) => (
                        <div 
                          key={app} 
                          className="px-4 py-2 text-[14px] font-medium rounded-[3px]"
                          style={{ background: '#f5f7fa', color: '#1a1a2a', border: '1px solid #e8e8e8' }}
                        >
                          {app}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Sidebar (40%) */}
            <div className="w-full lg:w-[40%]">
              <div className="sticky top-24">
                <div className="p-8 rounded-[2px]" style={{ background: '#0d1b2a', color: '#ffffff' }}>
                  <h3 className="text-[22px] font-bold mb-6" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    Request Information
                  </h3>
                  
                  <form className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full p-3 rounded-[2px] outline-none text-[#333] text-[14px]"
                        style={{ background: '#ffffff', border: '1px solid #cccccc' }}
                      />
                    </div>
                    <div>
                      <input 
                        type="text" 
                        placeholder="Company Name" 
                        className="w-full p-3 rounded-[2px] outline-none text-[#333] text-[14px]"
                        style={{ background: '#ffffff', border: '1px solid #cccccc' }}
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full p-3 rounded-[2px] outline-none text-[#333] text-[14px]"
                        style={{ background: '#ffffff', border: '1px solid #cccccc' }}
                      />
                    </div>
                    <div>
                      <textarea 
                        placeholder="Message or Specific Requirements" 
                        rows="4"
                        className="w-full p-3 rounded-[2px] outline-none text-[#333] text-[14px]"
                        style={{ background: '#ffffff', border: '1px solid #cccccc', resize: 'none' }}
                      />
                    </div>
                    <button 
                      type="button"
                      className="w-full py-3 font-semibold text-white uppercase tracking-wider rounded-[2px] transition-colors duration-200 mt-2"
                      style={{ background: '#1e5fa3', fontSize: '14px', fontFamily: 'Barlow, sans-serif' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#154f8a'}
                      onMouseLeave={(e) => e.currentTarget.style.background = '#1e5fa3'}
                    >
                      Submit Request
                    </button>
                  </form>
                  
                  <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.1)] text-center">
                    <p className="text-[13px] text-[#aaaaaa] mb-2">Or contact us directly:</p>
                    <p className="text-[14px] text-white font-medium mb-1">+86-0531-83323931</p>
                    <p className="text-[14px] text-white font-medium">sales@andeindustries.com</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Related Products Section */}
          <div className="mt-24 pt-16 border-t border-[#e8e8e8]">
            <SectionHeader label="EXPLORE MORE" title="Related Products" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="block bg-white border border-[#e8e8e8] rounded-sm overflow-hidden group hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-[160px] bg-gradient-to-br from-[#1a3a5c] to-[#0d1b2a] flex items-center justify-center">
                    <span className="text-white opacity-40 text-xs font-semibold uppercase">{p.title}</span>
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-bold text-[#1e5fa3] uppercase tracking-[1px] block mb-1">{p.category}</span>
                    <h4 className="text-[16px] font-bold text-[#1a1a2a] group-hover:text-[#1e5fa3] transition-colors" style={{ fontFamily: 'Barlow, sans-serif' }}>{p.title}</h4>
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
