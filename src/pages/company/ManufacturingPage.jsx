import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import AnimatedSection from '../../components/common/AnimatedSection';

const facilities = [
  {
    title: 'Main Fabrication Workshop',
    desc: 'Our expansive main workshop is equipped for the heavy fabrication and assembly of large-scale metallurgical equipment. With robust lifting capacities and automated welding stations, we can handle components up to 150 tons with precision.',
    specs: [
      'Total area: 25,000 square meters',
      'Maximum lifting capacity: 150 tons',
      'Advanced robotic welding cells'
    ]
  },
  {
    title: 'CNC Machining Center',
    desc: 'Precision is critical in metallurgical machinery. Our dedicated CNC machining center houses world-class vertical and horizontal lathes, boring machines, and gantry milling centers capable of achieving micrometer-level tolerances on massive parts.',
    specs: [
      'Gantry milling capacity up to 8m x 4m',
      'Heavy-duty vertical turning lathes',
      'Climate-controlled precision measurement'
    ]
  },
  {
    title: 'Quality Testing Laboratory',
    desc: 'Quality assurance begins long before assembly. Our testing laboratory conducts rigorous material analysis, non-destructive testing (NDT), and performance simulations to guarantee that every piece of equipment meets stringent international standards.',
    specs: [
      'Ultrasonic & X-Ray NDT capabilities',
      'Spectrographic material analysis',
      'Full-load factory acceptance testing'
    ]
  }
];

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        title="Manufacturing Facilities"
        subtitle="World-class manufacturing campus ensuring precision, scale, and quality."
        breadcrumb="Home / Company / Manufacturing"
      />

      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="OUR CAPABILITIES" title="In-House Production" centered />
          
          <p className="text-center text-[#555] text-[16px] leading-[1.8] max-w-4xl mx-auto mb-20 mt-6">
            ANDE Industries maintains absolute control over quality and delivery schedules by manufacturing core equipment entirely in-house. Our Jinan production campus spans over 40,000 square meters and integrates advanced fabrication, precision machining, and comprehensive testing facilities under one roof.
          </p>
          
          <AnimatedSection className="space-y-24">
            {facilities.map((fac, i) => (
              <div 
                key={fac.title} 
                className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image Placeholder */}
                <div 
                  className="w-full md:w-1/2 h-[350px] rounded-[2px] relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #0d1b2a, #1a3a5c)' }}
                >
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0px, transparent 1px, transparent 20px)' }} />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-white opacity-40 font-semibold tracking-wider text-sm uppercase">
                      {fac.title} Image
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <h3 className="font-bold text-[#1a1a2a] text-[28px] mb-6" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    {fac.title}
                  </h3>
                  <p className="text-[#555] text-[16px] leading-[1.8] mb-8">
                    {fac.desc}
                  </p>
                  <ul className="space-y-4">
                    {fac.specs.map((spec, j) => (
                      <li key={j} className="flex items-center gap-4 border-l-2 border-[#1e5fa3] pl-4">
                        <span className="text-[#444] font-medium text-[15px]">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
