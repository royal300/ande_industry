import PageHero from '../../components/common/PageHero';

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team"
        breadcrumb="Home / Company / Contact"
      />

      <section className="py-20 animate-fadeIn" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-bold mb-12 text-center text-[#1a1a2a]" style={{ fontFamily: 'Barlow, sans-serif', fontSize: '32px' }}>
            Our Contact Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Ande Industries Pvt. Ltd. */}
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#1e5fa3] mb-5 flex items-center gap-2" style={{ fontFamily: 'Barlow, sans-serif' }}>
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  Ande Industries Pvt. Ltd.
                </h3>
                <div className="text-gray-600 text-sm space-y-1 leading-relaxed font-sans">
                  <p className="font-semibold text-gray-800 text-base mb-2">Kolkata Office</p>
                  <p>Merlin Infinite, DN 51, Unit No.1303,</p>
                  <p>13th Floor, Sector V, Salt Lake,</p>
                  <p>Kolkata 700091, West Bengal, India</p>
                </div>
              </div>
            </div>

            {/* Card 2: Mother Company */}
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#1e5fa3] mb-5 flex items-center gap-2" style={{ fontFamily: 'Barlow, sans-serif' }}>
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                Parent Company
              </h3>
              <div className="text-gray-600 text-sm space-y-4 leading-relaxed font-sans">
                <div>
                  <p className="font-semibold text-gray-800 text-base mb-1">Ande Metallurgical Machinery Co. Ltd. (Head Office)</p>
                  <p>Address: Future Square, No. 55 Industrial South Road, High-tech Zone, Jinan, China</p>
                  <p>Tel: +86-531-8894 8601</p>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <p className="font-semibold text-gray-800 text-base mb-1">Works</p>
                  <p>Address: Chengdong Industrial Park, Jingshi East Road, Zhangqiu, Jinan, China</p>
                  <p>Tel: +86-531-8332 3930</p>
                </div>
                <div className="pt-3 border-t border-gray-200 space-y-1">
                  <p>
                    <strong>Website:</strong> <a href="http://www.andeindustries.com" target="_blank" rel="noreferrer" className="text-[#1e5fa3] hover:underline">www.andeindustries.com</a>
                  </p>
                  <p>
                    <strong>Email:</strong> <a href="mailto:huangfan@andeindustries.com" className="text-[#1e5fa3] hover:underline">huangfan@andeindustries.com</a> / <a href="mailto:sales@andeindustries.com" className="text-[#1e5fa3] hover:underline">sales@andeindustries.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Key Personnel Contacts */}
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#1e5fa3] mb-5 flex items-center gap-2" style={{ fontFamily: 'Barlow, sans-serif' }}>
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                Direct Contacts
              </h3>
              <div className="text-gray-600 text-sm space-y-4 leading-relaxed font-sans">
                <div>
                  <p className="font-semibold text-gray-800 text-base mb-1">Huang Fan</p>
                  <p>Mobile: 914771157</p>
                  <p>Email: <a href="mailto:huangfan@andeindustries.com" className="text-[#1e5fa3] hover:underline">huangfan@andeindustries.com</a></p>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <p className="font-semibold text-gray-800 text-base mb-1">Ashok Kumar Sengupta</p>
                  <p>Mobile: 9937294464 / 8319158089</p>
                  <p>Email: <a href="mailto:ashok@andeitpl.com" className="text-[#1e5fa3] hover:underline">ashok@andeitpl.com</a></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
