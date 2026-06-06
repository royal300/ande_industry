import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/common/PageHero';
import AnimatedSection from '../../components/common/AnimatedSection';
import { performanceData } from '../../data/performanceData';

/* ──────────────── Stats Bar ──────────────── */
const statsData = [
  { value: 150, label: '150+ Employees', suffix: '+' },
  { value: 90, label: '90+ Systems Commissioned', suffix: '+' },
  { value: 110, label: '110+ Projects Completed', suffix: '+' },
  { value: 30, label: '30+ Years Experience', suffix: '+' },
];

function useCounter(endValue, duration = 1500) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
          let start = 0;
          const increment = endValue / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= endValue) {
              setCount(endValue);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [endValue, duration, started]);

  return { count, ref };
}

function StatItem({ item }) {
  const { count, ref } = useCounter(item.value);
  return (
    <div ref={ref} className="text-center px-4">
      <div className="font-bold text-white mb-1" style={{ fontFamily: 'Barlow, sans-serif', fontSize: '36px' }}>
        {count}{item.suffix}
      </div>
      <div className="text-white" style={{ fontSize: '14px', opacity: 0.85 }}>
        {item.label}
      </div>
    </div>
  );
}

function StatsBar() {
  return (
    <section className="w-full py-12" style={{ background: '#1e5fa3' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-white divide-opacity-20">
          {statsData.map((stat, i) => (
            <StatItem key={i} item={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

const tabs = ['All', 'Metallurgical', 'Power Generation', 'Beneficiation', 'Chemical'];

export default function PerformancePage() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All'
    ? performanceData
    : performanceData.filter(p => p.industry === activeTab);

  return (
    <>
      <PageHero
        title="Performance"
        subtitle="Over 90 systems commissioned in world-class industrial plants"
        breadcrumb="Home / Performance"
      />

      <StatsBar />

      <section className="py-20" style={{ background: '#f5f7fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-[#e0e0e0]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-6 py-4 text-[15px] transition-colors duration-200"
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: activeTab === tab ? '600' : '500',
                  color: activeTab === tab ? '#1e5fa3' : '#555555',
                  borderBottom: `3px solid ${activeTab === tab ? '#1e5fa3' : 'transparent'}`,
                  marginBottom: '-1px'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="flex flex-col bg-white rounded-sm overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ border: '1px solid #e8e8e8' }}
              >
                {/* Image Area */}
                <div 
                  className="h-[200px] relative p-4 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image || ''}), linear-gradient(135deg, #0d1b2a, #1a3a5c)` }}
                >
                  <span className="inline-block px-3 py-1 bg-[#1e5fa3] text-white text-[11px] font-bold uppercase tracking-wider rounded-[2px] relative z-10 shadow-sm">
                    {project.industry}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-semibold text-[#1a1a2a] text-[16px] mb-2 group-hover:text-[#1e5fa3] transition-colors" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-[#666666] text-[14px] line-clamp-2 mb-5 leading-[1.6]">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-[#888888] text-[13px]">
                      <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2 text-[#888888] text-[13px]">
                      <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v8l9-11h-7z"/></svg>
                      {project.capacity}
                    </div>
                  </div>

                  <Link 
                    to={`/performance`} 
                    className="text-[14px] font-semibold flex items-center transition-transform group-hover:translate-x-1"
                    style={{ color: '#1e5fa3' }}
                  >
                    View Case <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </AnimatedSection>
          
          {filteredProjects.length === 0 && (
            <div className="text-center text-[#666] py-12">
              No projects found for the selected industry.
            </div>
          )}

        </div>
      </section>
    </>
  );
}
