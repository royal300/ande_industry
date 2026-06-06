import { Link } from 'react-router-dom';
import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import AnimatedSection from '../../components/common/AnimatedSection';
import { servicesData } from '../../data/servicesData';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        subtitle="Comprehensive support for every stage of your project"
        breadcrumb="Home / Services"
      />

      {/* Services Overview Intro */}
      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Intro */}
            <div>
              <SectionHeader
                label="LIFECYCLE PARTNER"
                title="Our Service Commitment"
              />
              <p className="text-[16px] leading-[1.8] text-[#555] mt-6">
                ANDE's service offering goes far beyond equipment supply. We partner with our clients throughout the entire project and operational lifecycle. Our dedicated service teams ensure that your metallurgical plant achieves maximum availability, optimal performance, and the lowest possible total cost of ownership. Whether you need immediate troubleshooting or long-term operational support, ANDE is here to help.
              </p>
            </div>
            
            {/* Right: Numbered List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {servicesData.map((service, i) => (
                <div key={service.slug} className="flex items-center gap-4">
                  <div 
                    className="font-bold opacity-30 select-none" 
                    style={{ color: '#1e5fa3', fontFamily: 'Barlow, sans-serif', fontSize: '32px' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="text-[16px] font-medium text-[#1a1a2a]" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    {service.title}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" style={{ background: '#f5f7fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="block bg-white p-8 rounded-sm group transition-all duration-300 hover:-translate-y-2"
                style={{ border: '1px solid #e8e8e8', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.02)';
                }}
              >
                {/* Icon Area */}
                <div 
                  className="w-[60px] h-[60px] rounded flex items-center justify-center transition-colors duration-300"
                  style={{ background: '#e8f0fb' }}
                >
                  <svg 
                    width="30" height="30" viewBox="0 0 24 24" fill="none" 
                    className="transition-colors duration-300 stroke-[#1e5fa3] group-hover:stroke-white" 
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d={service.icon} />
                  </svg>
                  {/* Hover effect to change bg */}
                  <style>{`
                    .group:hover div[class*="w-[60px]"] { background-color: #1e5fa3 !important; }
                  `}</style>
                </div>

                <h3 className="font-semibold text-[18px] text-[#1a1a2a] mt-6 mb-3 group-hover:text-[#1e5fa3] transition-colors" style={{ fontFamily: 'Barlow, sans-serif' }}>
                  {service.title}
                </h3>
                
                <p className="text-[#666666] text-[14px] line-clamp-3 mb-6" style={{ lineHeight: 1.7 }}>
                  {service.description}
                </p>
                
                <div className="mt-auto text-[13px] font-semibold flex items-center transition-transform group-hover:translate-x-1" style={{ color: '#1e5fa3', letterSpacing: '0.5px' }}>
                  Learn More <span className="ml-1">→</span>
                </div>
              </Link>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
