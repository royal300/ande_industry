import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import AnimatedSection from '../../components/common/AnimatedSection';

const timelineData = [
  { year: '2003', title: 'Company Founded', desc: 'Started as a specialized machinery workshop in Jinan with a core focus on crushing equipment.' },
  { year: '2008', title: 'First Major Turnkey Project', desc: 'Successfully commissioned our first complete Pulverized Coal Injection system for a domestic blast furnace.' },
  { year: '2010', title: 'Engineering Dept. Established', desc: 'Expanded in-house capabilities to include full 3D plant modeling and advanced process simulation.' },
  { year: '2015', title: 'International Expansion', desc: 'Completed our first major overseas project in Southeast Asia, establishing our global footprint.' },
  { year: '2018', title: 'Patents Milestone', desc: 'Reached 40 registered patents, recognizing our proprietary advancements in grinding and conveying tech.' },
  { year: '2020', title: 'Digital Transformation', desc: 'Launched the ANDE Smart Control digital monitoring and predictive maintenance platform.' },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        title="Company Profile"
        subtitle="An innovative specialist in metallurgical equipment since 2003"
        breadcrumb="Home / Company"
      />

      {/* About Section */}
      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 mb-16">
           <img src="/images/company_main_1780751570190.webp" alt="Company Facility" className="w-full h-[400px] object-cover rounded shadow-md mb-8" />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader label="ABOUT ANDE" title="Who We Are" />
            <div className="space-y-4 text-[#555] text-[16px] leading-[1.8] mt-6">
              <p>
                Founded in 2003, ANDE Industries has grown into a leading global provider of comprehensive process solutions and core equipment for the metallurgical, mining, and chemical industries. Headquartered in Jinan, China, we combine deep engineering expertise with state-of-the-art manufacturing capabilities.
              </p>
              <p>
                Our strength lies in our people. With a dedicated team of over 150 employees, including more than 40 senior engineers and technical specialists, we possess the multidisciplinary knowledge required to tackle the most complex industrial challenges. From initial process design to final commissioning, our team works tirelessly to ensure project success.
              </p>
              <p>
                Today, ANDE's footprint extends across the globe. We have successfully delivered over 90 complex systems to clients in more than 15 countries. Our commitment to quality, innovation, and unwavering customer support has established us as a trusted partner for the world's leading industrial enterprises.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '150+', label: 'Employees' },
              { num: '40+', label: 'Senior Engineers' },
              { num: '90+', label: 'Systems Commissioned' },
              { num: '15+', label: 'Countries Served' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-10 rounded-sm text-center" style={{ background: '#0d1b2a' }}>
                <span className="text-white font-bold mb-2" style={{ fontFamily: 'Barlow, sans-serif', fontSize: '40px', lineHeight: 1 }}>
                  {stat.num}
                </span>
                <span className="text-[#1e5fa3] font-semibold text-[13px] uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20" style={{ background: '#f5f7fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Our Mission', desc: 'To engineer and deliver the most reliable, efficient, and environmentally responsible metallurgical equipment, empowering our clients to build the infrastructure of tomorrow.', icon: 'M13 10V3L4 14h7v8l9-11h-7z' },
              { title: 'Our Vision', desc: 'To be the world\'s most trusted and innovative partner for sustainable, high-performance metallurgical and mining process solutions.', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
              { title: 'Our Values', desc: 'Innovation in our engineering, Integrity in our business, Excellence in our execution, and unwavering dedication to Customer Success.', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 shadow-sm rounded-[2px]" style={{ borderTop: '4px solid #1e5fa3' }}>
                <div className="w-12 h-12 bg-[#e8f0fb] rounded-full flex items-center justify-center mb-6">
                  <svg width="24" height="24" fill="none" stroke="#1e5fa3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-[#1a1a2a] text-[20px] mb-4" style={{ fontFamily: 'Barlow, sans-serif' }}>{item.title}</h3>
                <p className="text-[15px] text-[#666] leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader label="OUR JOURNEY" title="Company Milestones" centered />
          
          <div className="relative mt-16">
            {/* Vertical Line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-[#e0e0e0] transform md:-translate-x-1/2" />
            
            <AnimatedSection>
              {timelineData.map((item, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Spacing for alternating layout on desktop */}
                  <div className="hidden md:block w-5/12" />
                  
                  {/* Center Node */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-10 w-[56px]">
                    <div className="w-14 h-14 bg-[#1e5fa3] rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                      <span className="text-white font-bold text-[14px]" style={{ fontFamily: 'Barlow, sans-serif' }}>
                        {item.year}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-5/12 pl-[80px] md:pl-0 ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <div className="bg-[#f9f9f9] border border-[#f0f0f0] rounded-[2px] p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-[#1a1a2a] text-[18px] mb-2" style={{ fontFamily: 'Barlow, sans-serif' }}>
                        {item.title}
                      </h4>
                      <p className="text-[14px] text-[#666] leading-[1.6]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  
                </div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
