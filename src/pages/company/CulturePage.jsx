import PageHero from '../../components/common/PageHero';
import AnimatedSection from '../../components/common/AnimatedSection';

const values = [
  {
    num: '01',
    title: 'Innovation',
    desc: 'We foster a culture where curiosity is celebrated and conventional thinking is constantly challenged. By empowering our engineers to explore new materials, advanced software algorithms, and optimized fluid dynamics, we continuously push the boundaries of what is possible in metallurgical equipment.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  },
  {
    num: '02',
    title: 'Integrity',
    desc: 'Our reputation is built on decades of transparent, honest relationships with clients, suppliers, and our own team. We stand by the performance guarantees of our equipment, deliver on our promises, and conduct all global operations with the highest ethical standards.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    num: '03',
    title: 'Excellence',
    desc: 'We refuse to compromise on quality. From the meticulous selection of raw materials to the rigorous non-destructive testing of finished components, excellence is engineered into every step of our manufacturing and service delivery processes.',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  }
];

export default function CulturePage() {
  return (
    <>
      <PageHero
        title="Our Culture"
        subtitle="The values that drive our engineering and guide our global operations."
        breadcrumb="Home / Company / Culture"
      />

      <AnimatedSection>
        {values.map((v, i) => {
          const isDark = i % 2 === 0;
          return (
            <section 
              key={v.num} 
              className="py-24" 
              style={{ background: isDark ? '#0d1b2a' : '#f5f7fa', color: isDark ? '#ffffff' : '#1a1a2a' }}
            >
              <div className={`max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 ${isDark ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-6 mb-6">
                    <span 
                      className="font-bold select-none leading-none" 
                      style={{ 
                        fontFamily: 'Barlow, sans-serif', 
                        fontSize: '64px', 
                        color: isDark ? 'rgba(30, 95, 163, 0.5)' : 'rgba(30, 95, 163, 0.2)' 
                      }}
                    >
                      {v.num}
                    </span>
                    <h2 
                      className="font-bold" 
                      style={{ fontFamily: 'Barlow, sans-serif', fontSize: '32px' }}
                    >
                      {v.title}
                    </h2>
                  </div>
                  <p 
                    className="text-[16px] leading-[1.8]"
                    style={{ color: isDark ? 'rgba(255,255,255,0.8)' : '#555555' }}
                  >
                    {v.desc}
                  </p>
                </div>
                
                {/* Icon Visual */}
                <div className="w-full md:w-5/12 flex justify-center">
                  <div 
                    className="w-[200px] h-[200px] rounded-full flex items-center justify-center"
                    style={{ 
                      background: isDark ? 'rgba(30, 95, 163, 0.1)' : '#ffffff',
                      border: isDark ? '1px solid rgba(30, 95, 163, 0.3)' : '1px solid #e8e8e8',
                      boxShadow: isDark ? 'none' : '0 10px 30px rgba(0,0,0,0.05)'
                    }}
                  >
                    <svg width="80" height="80" fill="none" stroke="#1e5fa3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d={v.icon} />
                    </svg>
                  </div>
                </div>

              </div>
            </section>
          );
        })}
      </AnimatedSection>
    </>
  );
}
