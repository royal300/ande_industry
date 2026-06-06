import { useParams, Link } from 'react-router-dom';
import PageHero from '../../components/common/PageHero';
import PrimaryButton from '../../components/common/PrimaryButton';
import { servicesData } from '../../data/servicesData';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f7fa]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Barlow, sans-serif' }}>Service Not Found</h1>
          <PrimaryButton label="Back to Services" href="/services" variant="filled" />
        </div>
      </div>
    );
  }

  // Generate generic process steps (in a real app, this might come from data)
  const processSteps = [
    { title: 'Initial Consultation', desc: 'Understanding your specific requirements and operational challenges.' },
    { title: 'Detailed Assessment', desc: 'Comprehensive analysis and site evaluation by our engineering team.' },
    { title: 'Solution Proposal', desc: 'Presenting a tailored strategy with clear deliverables and timelines.' },
    { title: 'Execution & Support', desc: 'Professional implementation followed by ongoing technical support.' }
  ];

  return (
    <>
      <PageHero
        title={service.title}
        subtitle=""
        breadcrumb={`Home / Services / ${service.title}`}
      />

      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content (70%) */}
            <div className="w-full lg:w-[70%]">
              
              <h2 className="text-[28px] font-bold mb-6 text-[#1a1a2a]" style={{ fontFamily: 'Barlow, sans-serif' }}>
                What We Offer
              </h2>
              <p className="text-[16px] text-[#555] leading-[1.8] mb-8">
                {service.description} Our approach is rooted in decades of metallurgical expertise. We don't just provide a service; we deliver measurable improvements to your plant's efficiency, safety, and bottom line.
              </p>
              
              <h3 className="font-bold text-[20px] mb-6 text-[#1a1a2a]" style={{ fontFamily: 'Barlow, sans-serif' }}>
                Key Deliverables
              </h3>
              <ul className="space-y-4 mb-16">
                {[...service.details, 'Dedicated Project Management', 'Detailed Documentation & Reporting'].map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e5fa3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="text-[15px] text-[#444] leading-[1.6]">{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Our Process Strip */}
              <h3 className="font-bold text-[20px] mb-8 text-[#1a1a2a]" style={{ fontFamily: 'Barlow, sans-serif' }}>
                Our Process
              </h3>
              <div className="relative mb-16">
                {/* Connecting dashed line (hidden on mobile, visible md+) */}
                <div className="hidden md:block absolute top-[18px] left-[20px] right-[20px] border-t-2 border-dashed border-[#cccccc] z-0" />
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                  {processSteps.map((step, i) => (
                    <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
                      <div 
                        className="w-[36px] h-[36px] rounded-full flex items-center justify-center text-white font-bold text-[14px] mb-4"
                        style={{ background: '#1e5fa3', fontFamily: 'Barlow, sans-serif' }}
                      >
                        {i + 1}
                      </div>
                      <h4 className="font-bold text-[#1a1a2a] text-[16px] mb-2" style={{ fontFamily: 'Barlow, sans-serif' }}>
                        {step.title}
                      </h4>
                      <p className="text-[13px] text-[#666] leading-[1.6]">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Banner */}
              <div className="p-10 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8" style={{ background: '#0d1b2a' }}>
                <div>
                  <h3 className="text-white text-[24px] font-bold mb-2" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    Ready to get started?
                  </h3>
                  <p className="text-[15px] text-white opacity-80">
                    Reach out to our experts to discuss how we can support your operations.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                  <PrimaryButton label="Contact Us" href="/company/contact" variant="white-outlined" />
                  <PrimaryButton label="View All Services" href="/services" variant="filled" />
                </div>
              </div>

            </div>

            {/* Sidebar (30%) */}
            <div className="w-full lg:w-[30%]">
              <div className="sticky top-24 space-y-8">
                
                {/* Other Services */}
                <div className="bg-white border border-[#e8e8e8] rounded-sm p-6 shadow-sm">
                  <h4 className="font-bold mb-4 text-[#1a1a2a] text-[18px]" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    Other Services
                  </h4>
                  <div className="flex flex-col">
                    {servicesData.map((s) => {
                      const isActive = s.slug === slug;
                      return (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="py-3 px-4 text-[14px] font-medium transition-colors"
                          style={{
                            color: isActive ? '#1e5fa3' : '#555',
                            borderLeft: isActive ? '3px solid #1e5fa3' : '3px solid transparent',
                            background: isActive ? '#f0f5fb' : 'transparent',
                            borderBottom: '1px solid #f0f0f0'
                          }}
                        >
                          {s.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Contact Box */}
                <div className="bg-[#f5f7fa] border border-[#e8e8e8] rounded-sm p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#1e5fa3] flex items-center justify-center mx-auto mb-4 text-white">
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <h4 className="font-bold text-[#1a1a2a] mb-2" style={{ fontFamily: 'Barlow, sans-serif' }}>Need Assistance?</h4>
                  <p className="text-[14px] text-[#666] mb-4">Our support team is available 24/7.</p>
                  <p className="text-[15px] font-bold text-[#1a1a2a] mb-1">+86-400-800-1234</p>
                  <p className="text-[14px] text-[#1e5fa3] mb-6">service@andeindustries.com</p>
                  <PrimaryButton label="Contact Us" href="/company/contact" variant="outlined" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
