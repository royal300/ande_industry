import { useState } from 'react';
import PageHero from '../../components/common/PageHero';
import AnimatedSection from '../../components/common/AnimatedSection';
import { performanceData } from '../../data/performanceData';

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
                  
                  <div className="mt-auto space-y-2">
                    <div className="flex items-center gap-2 text-[#888888] text-[13px]">
                      <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2 text-[#888888] text-[13px]">
                      <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v8l9-11h-7z"/></svg>
                      {project.capacity}
                    </div>
                  </div>
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
