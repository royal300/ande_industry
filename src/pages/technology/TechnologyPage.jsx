import { useState } from 'react';
import PageHero from '../../components/common/PageHero';
import TechCard from '../../components/common/TechCard';
import AnimatedSection from '../../components/common/AnimatedSection';
import { technologyData } from '../../data/technologyData';

const techCategories = [
  'All', 'PCI Systems', 'Grinding', 'Crushing', 'Drying', 
  'Feeding', 'Conveying', 'Thermal', 'Sintering'
];

export default function TechnologyPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Basic filter mapping (you might need to adjust mapping logic based on your data structure)
  const filteredTech = activeCategory === 'All' 
    ? technologyData 
    : technologyData.filter(tech => 
        tech.title.toLowerCase().includes(activeCategory.toLowerCase()) ||
        tech.category.toLowerCase().includes(activeCategory.toLowerCase())
      );

  return (
    <>
      <PageHero
        title="Technology"
        subtitle="High-performance solutions for metallurgical processes worldwide"
        breadcrumb="Home / Technology"
      />

      {/* Intro Paragraph Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[16px] text-[#555] leading-relaxed">
            ANDE Industries offers a comprehensive portfolio of proprietary technologies designed to optimize metallurgical, mining, and chemical operations. From advanced pulverized coal injection systems that reduce fuel costs, to high-efficiency grinding and emission control solutions, our engineering expertise ensures that every process step operates at peak performance. Explore our core technical capabilities below.
          </p>
        </div>
      </section>

      {/* Main Technology Grid */}
      <section className="py-20" style={{ background: '#f5f7fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {techCategories.map((cat) => (
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

          {/* Cards Grid */}
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTech.map((tech) => (
              <TechCard
                key={tech.slug}
                title={tech.title}
                description={tech.description}
                href={`/technology/${tech.slug}`}
              />
            ))}
          </AnimatedSection>

          {filteredTech.length === 0 && (
            <div className="text-center text-[#666] py-12">
              No technologies found for the selected category.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
