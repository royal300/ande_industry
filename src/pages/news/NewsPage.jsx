import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/common/PageHero';
import PrimaryButton from '../../components/common/PrimaryButton';
import AnimatedSection from '../../components/common/AnimatedSection';
import { newsData } from '../../data/newsData';

const categories = ['All News', 'COMPANY NEWS', 'PROJECT STATUS', 'INDUSTRY DYNAMIC'];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All News');

  const filteredNews = activeCategory === 'All News'
    ? newsData
    : newsData.filter(news => news.category === activeCategory);

  const featured = filteredNews[0];
  const gridNews = filteredNews.slice(1);

  return (
    <>
      <PageHero
        title="News & Updates"
        subtitle="Latest developments from ANDE Industries"
        breadcrumb="Home / News"
      />

      <section className="py-20" style={{ background: '#f5f7fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Filter Tabs */}
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

          {/* Featured Article */}
          {featured && (
            <AnimatedSection>
              <div className="bg-white rounded-sm overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow mb-12" style={{ border: '1px solid #e8e8e8' }}>
                <div className="w-full md:w-1/2 h-[300px] md:h-auto relative" style={{ background: 'linear-gradient(135deg, #0d1b2a, #1a3a5c)' }}>
                   <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0px, transparent 1px, transparent 10px)' }} />
                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <span className="text-white opacity-40 font-semibold tracking-wider text-sm uppercase">Featured Image</span>
                   </div>
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-[2px] px-3 py-1 bg-[#e8f0fb] rounded-[2px]" style={{ color: '#1e5fa3' }}>
                      {featured.category}
                    </span>
                    <span className="text-[14px] text-[#999] font-medium">{featured.date}</span>
                  </div>
                  <h2 className="font-bold text-[#1a1a2a] text-[28px] mb-4 hover:text-[#1e5fa3] transition-colors" style={{ fontFamily: 'Barlow, sans-serif', lineHeight: 1.3 }}>
                    <Link to={`/news/${featured.id}`}>{featured.title}</Link>
                  </h2>
                  <p className="text-[16px] text-[#666] leading-[1.7] mb-8 line-clamp-4">
                    {featured.excerpt}
                  </p>
                  <div>
                    <PrimaryButton label="Read Full Article →" href={`/news/${featured.id}`} variant="outlined" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* News Grid */}
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridNews.map((news) => (
              <Link 
                key={news.id} 
                to={`/news/${news.id}`} 
                className="flex flex-col bg-white rounded-[2px] group overflow-hidden transition-all duration-300 ease-in-out"
                style={{ border: '1px solid #e8e8e8', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                }}
              >
                <div className="h-[220px] relative" style={{ background: 'linear-gradient(180deg, #1a3a5c, #0d1b2a)' }}>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <span className="text-white opacity-20 font-semibold tracking-wider text-xs uppercase">Image Placeholder</span>
                   </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-[2px]" style={{ color: '#1e5fa3' }}>{news.category}</span>
                    <span className="text-[12px]" style={{ color: '#999999' }}>{news.date}</span>
                  </div>
                  <h3 className="font-semibold text-[17px] mb-3 transition-colors duration-200 group-hover:text-[#1e5fa3]" style={{ color: '#1a1a2a', fontFamily: 'Barlow, sans-serif', lineHeight: 1.4 }}>
                    {news.title}
                  </h3>
                  <p className="text-[14px] line-clamp-3 mb-6 flex-1" style={{ color: '#666666', lineHeight: 1.6 }}>{news.excerpt}</p>
                  
                  <div className="mt-auto text-[13px] font-semibold flex items-center group-hover:translate-x-1 transition-transform" style={{ color: '#1e5fa3' }}>
                    Read More <span className="ml-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </AnimatedSection>
          
          {filteredNews.length === 0 && (
            <div className="text-center text-[#666] py-12">
              No articles found for the selected category.
            </div>
          )}

          {/* Pagination */}
          {gridNews.length > 0 && (
            <div className="flex justify-center items-center gap-2 mt-16">
              <button className="w-[40px] h-[40px] flex items-center justify-center rounded-[2px] border border-[#ccc] text-[#666] transition-colors hover:border-[#1e5fa3] hover:text-[#1e5fa3]">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button className="w-[40px] h-[40px] flex items-center justify-center rounded-[2px] bg-[#1e5fa3] text-white font-bold transition-colors">1</button>
              <button className="w-[40px] h-[40px] flex items-center justify-center rounded-[2px] border border-[#ccc] text-[#666] transition-colors hover:border-[#1e5fa3] hover:text-[#1e5fa3]">2</button>
              <button className="w-[40px] h-[40px] flex items-center justify-center rounded-[2px] border border-[#ccc] text-[#666] transition-colors hover:border-[#1e5fa3] hover:text-[#1e5fa3]">3</button>
              <button className="w-[40px] h-[40px] flex items-center justify-center rounded-[2px] border border-[#ccc] text-[#666] transition-colors hover:border-[#1e5fa3] hover:text-[#1e5fa3]">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
