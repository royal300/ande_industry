import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../../components/common/PageHero';
import PrimaryButton from '../../components/common/PrimaryButton';
import { getNewsById, newsData } from '../../data/newsData';

export default function NewsDetailPage() {
  const { id } = useParams();
  const article = getNewsById(id);
  
  // Get 3 recent news for sidebar
  const recentNews = newsData.filter(n => n.id !== parseInt(id)).slice(0, 3);
  const [email, setEmail] = useState('');

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f7fa]">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Barlow, sans-serif' }}>Article Not Found</h1>
          <p className="text-[#666] mb-8">The news article you are looking for does not exist or has been removed.</p>
          <PrimaryButton label="Back to News" href="/news" variant="filled" />
        </div>
      </div>
    );
  }

  // Split body text by double newline
  const paragraphs = article.body.split('\n\n');

  return (
    <>
      <PageHero
        title={article.title}
        subtitle=""
        breadcrumb="Home / News / Article"
      />

      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content (70%) */}
            <div className="w-full lg:w-[70%]">
              
              {/* Image Placeholder */}
              <div className="w-full h-[360px] rounded-[2px] mb-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1b2a, #1a3a5c)' }}>
                 <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0px, transparent 1px, transparent 15px)' }} />
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <span className="text-white opacity-40 font-semibold tracking-wider text-lg uppercase">Article Main Image</span>
                 </div>
              </div>
              
              {/* Meta Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#f0f0f0]">
                <div className="flex items-center gap-4">
                  <span className="text-[14px] text-[#666] font-medium">{article.date}</span>
                  <span className="text-[11px] px-3 py-1 bg-[#e8f0fb] rounded-[2px] font-bold uppercase tracking-[1px]" style={{ color: '#1e5fa3' }}>
                    {article.category}
                  </span>
                </div>
                
                {/* Share Buttons */}
                <div className="flex items-center gap-3">
                  <span className="text-[13px] text-[#999] font-medium mr-1">Share:</span>
                  <button className="w-8 h-8 rounded-full bg-[#f5f7fa] flex items-center justify-center text-[#999] transition-colors hover:bg-[#0077b5] hover:text-white" aria-label="Share on LinkedIn">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </button>
                  <button className="w-8 h-8 rounded-full bg-[#f5f7fa] flex items-center justify-center text-[#999] transition-colors hover:bg-[#1da1f2] hover:text-white" aria-label="Share on Twitter">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </button>
                </div>
              </div>
              
              {/* Article Body */}
              <article className="prose max-w-none">
                <h2 className="text-[24px] font-bold text-[#1a1a2a] mb-6" style={{ fontFamily: 'Barlow, sans-serif' }}>
                  {article.title}
                </h2>
                
                {paragraphs.map((p, i) => {
                  // Make the second paragraph a blockquote for demonstration
                  if (i === 1) {
                    return (
                      <blockquote key={i} className="px-6 py-4 my-8 bg-[#f5f7fa] italic text-[#555] text-[16px] leading-[1.8] rounded-r-[2px]" style={{ borderLeft: '4px solid #1e5fa3' }}>
                        "{p}"
                      </blockquote>
                    );
                  }
                  return (
                    <p key={i} className="text-[16px] text-[#444] leading-[1.8] mb-6">
                      {p}
                    </p>
                  );
                })}
              </article>
              
            </div>

            {/* Sidebar (30%) */}
            <div className="w-full lg:w-[30%]">
              <div className="sticky top-24 space-y-10">
                
                {/* Related Articles */}
                <div>
                   <h4 className="font-bold mb-6 text-[18px] pb-3 border-b border-[#e8e8e8]" style={{ color: '#1a1a2a', fontFamily: 'Barlow, sans-serif' }}>
                     Related Articles
                   </h4>
                   
                   <div className="space-y-6">
                     {recentNews.map((news) => (
                       <Link 
                         key={news.id} 
                         to={`/news/${news.id}`}
                         className="flex gap-4 group items-center"
                       >
                         {/* Compact Image */}
                         <div className="w-[80px] h-[80px] flex-shrink-0 rounded-[2px]" style={{ background: 'linear-gradient(135deg, #1a3a5c, #0d1b2a)' }} />
                         <div>
                           <h5 className="font-semibold text-[#1a1a2a] text-[14px] leading-[1.4] mb-2 group-hover:text-[#1e5fa3] transition-colors line-clamp-2" style={{ fontFamily: 'Barlow, sans-serif' }}>
                             {news.title}
                           </h5>
                           <span className="text-[12px] text-[#999]">{news.date}</span>
                         </div>
                       </Link>
                     ))}
                   </div>
                </div>
                
                {/* Newsletter Box */}
                <div className="p-8 text-white rounded-[2px]" style={{ background: '#0d1b2a' }}>
                   <h4 className="font-bold mb-3 text-[20px]" style={{ fontFamily: 'Barlow, sans-serif' }}>Subscribe for Updates</h4>
                   <p className="mb-6 text-[14px] opacity-80 leading-[1.6]">
                     Get the latest engineering insights and product announcements delivered to your inbox.
                   </p>
                   <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); setEmail(''); }} className="space-y-3">
                     <input 
                       type="email" 
                       placeholder="Email Address" 
                       required
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       className="w-full px-4 py-3 rounded-[2px] text-[#333] text-[14px] outline-none"
                     />
                     <button 
                       type="submit" 
                       className="w-full py-3 font-semibold uppercase tracking-wider text-[13px] rounded-[2px] transition-colors"
                       style={{ background: '#1e5fa3' }}
                       onMouseEnter={(e) => e.currentTarget.style.background = '#154f8a'}
                       onMouseLeave={(e) => e.currentTarget.style.background = '#1e5fa3'}
                     >
                       Subscribe
                     </button>
                   </form>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
