import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import AnimatedSection from '../../components/common/AnimatedSection';

export default function AppearancePage() {
  const galleryItems = Array.from({ length: 12 }).map((_, i) => `Facility View ${i + 1}`);

  return (
    <>
      <PageHero
        title="Company Appearance"
        subtitle="A look inside our modern headquarters and world-class manufacturing campus."
        breadcrumb="Home / Company / Appearance"
      />

      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="GALLERY" title="Our Facilities" centered />
          
          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {galleryItems.map((item, i) => (
              <div 
                key={i}
                className="relative w-full aspect-square overflow-hidden rounded-[2px] group cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #0d1b2a, #1a3a5c)' }}
              >
                {/* Simulated Geometric Pattern Image */}
                <div 
                  className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-105"
                  style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 10px)' }}
                />
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white opacity-40 font-semibold tracking-wider text-sm uppercase">
                    {item}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div 
                  className="absolute inset-0 bg-[#1e5fa3] bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="text-white font-bold tracking-widest uppercase border border-white px-6 py-2 rounded-[2px]">
                    View
                  </span>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
