import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import AnimatedSection from '../../components/common/AnimatedSection';

const honors = [
  { title: 'ISO 9001:2015 Quality Management System', year: '2023 Renewal' },
  { title: 'ISO 14001:2015 Environmental Management', year: '2023 Renewal' },
  { title: 'ISO 45001:2018 Occupational Health & Safety', year: '2023 Renewal' },
  { title: 'National High-Tech Enterprise', year: '2022' },
  { title: 'Provincial Specialized and Innovative Enterprise', year: '2021' },
  { title: 'CE Certification for Export Equipment', year: '2020' },
  { title: 'Outstanding Supplier - TATA Steel', year: '2024' },
  { title: 'First Prize: Metallurgical Science & Tech Award', year: '2019' },
];

export default function HonorPage() {
  return (
    <>
      <PageHero
        title="Honor & Qualification"
        subtitle="Recognized globally for excellence in engineering and quality manufacturing."
        breadcrumb="Home / Company / Honor"
      />

      <section className="py-20" style={{ background: '#f5f7fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="CERTIFICATIONS" title="Awards & Qualifications" centered />
          
          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {honors.map((honor, i) => (
              <div 
                key={i}
                className="bg-white p-8 rounded-[2px] text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
                style={{ border: '1px solid #e0e0e0' }}
              >
                <div className="flex justify-center mb-6">
                  <svg width="48" height="48" fill="none" stroke="#1e5fa3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M12 15l-3 3-3-3V5a2 2 0 012-2h8a2 2 0 012 2v10l-3 3-3-3z" />
                    <path d="M12 15v6" />
                    <circle cx="12" cy="9" r="2" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#1a1a2a] text-[16px] mb-3 leading-[1.4]" style={{ fontFamily: 'Barlow, sans-serif' }}>
                  {honor.title}
                </h3>
                <span className="text-[#999999] text-[13px] font-medium">
                  {honor.year}
                </span>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
