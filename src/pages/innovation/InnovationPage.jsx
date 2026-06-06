import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import PrimaryButton from '../../components/common/PrimaryButton';
import AnimatedSection from '../../components/common/AnimatedSection';

const ipData = [
  { type: 'PATENT', title: 'Grinding roller circulating lubrication device', number: 'ZL201820468923.4', year: '2018' },
  { type: 'PATENT', title: 'VRM protection device for interrupted feeding', number: 'ZL201820468922.X', year: '2018' },
  { type: 'PATENT', title: 'Waste heat recovery for active lime rotary kiln', number: 'ZL202021432109.8', year: '2020' },
  { type: 'COPYRIGHT', title: 'Coal injection control system for lime kiln', number: '2019SR0823412', year: '2019' },
  { type: 'COPYRIGHT', title: 'Coal injection system for pelletizing rotary kiln', number: '2019SR0823418', year: '2019' },
  { type: 'COPYRIGHT', title: 'Automatic control system for HGG', number: '2020SR1234567', year: '2020' },
  { type: 'COPYRIGHT', title: 'Coal pulverizing & injection control system for BF', number: '2018SR1234567', year: '2018' },
];

const knowHowData = [
  { title: 'Material Characterization', desc: 'Extensive empirical database of over 500 material types, detailing their grindability, flowability, and abrasive characteristics under varying conditions.' },
  { title: 'Computational Fluid Dynamics', desc: 'Proprietary CFD models customized for multiphase flow, allowing us to precisely simulate particle trajectories and thermal exchange in our systems.' },
  { title: 'Process Optimization Algorithms', desc: 'Self-developed control logic that continuously adapts equipment parameters based on real-time feedback to maximize yield and minimize energy consumption.' },
];

export default function InnovationPage() {
  return (
    <>
      <PageHero
        title="Innovation"
        subtitle="Pioneering metallurgical technology through continuous R&D"
        breadcrumb="Home / Innovation"
      />

      {/* Intro Section */}
      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-bold text-[#1a1a2a] mb-6" style={{ fontFamily: 'Barlow, sans-serif', fontSize: '36px', lineHeight: 1.2 }}>
              Innovation is Our Culture
            </h2>
            <p className="text-[#555] text-[16px] leading-[1.8] mb-8">
              At ANDE Industries, innovation is not just an initiative—it's the foundation of everything we build. We continuously invest heavily in research and development to address the most pressing challenges in the metallurgical and mining sectors. By combining decades of field experience with advanced computational engineering, our R&D team delivers proprietary solutions that reduce emissions, enhance process efficiency, and ensure robust operational reliability.
            </p>
            <PrimaryButton label="View Our Patents" href="#ip-section" variant="filled" />
          </div>
          <div className="flex flex-col gap-4">
            {[
              { num: '40+', label: 'Patents' },
              { num: '5', label: 'Software Copyrights' },
              { num: '15+', label: 'Proprietary Know-How' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center py-8 rounded-sm" style={{ background: '#0d1b2a' }}>
                <span className="text-white font-bold mb-1" style={{ fontFamily: 'Barlow, sans-serif', fontSize: '48px', lineHeight: 1 }}>
                  {stat.num}
                </span>
                <span className="text-[#1e5fa3] font-semibold tracking-wider uppercase text-[14px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patent Section */}
      <section id="ip-section" className="py-20" style={{ background: '#f5f7fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="INTELLECTUAL PROPERTY" title="Patents & Copyrights" centered />
          
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {ipData.map((ip, i) => (
              <div 
                key={i} 
                className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ borderLeft: '4px solid #1e5fa3', borderRight: '1px solid #e8e8e8', borderTop: '1px solid #e8e8e8', borderBottom: '1px solid #e8e8e8', borderRadius: '2px' }}
              >
                <span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold tracking-widest uppercase rounded-[2px]" style={{ background: '#e8f0fb', color: '#1e5fa3' }}>
                  {ip.type}
                </span>
                <h4 className="font-semibold text-[#1a1a2a] text-[16px] mb-3 leading-[1.4]" style={{ fontFamily: 'Barlow, sans-serif' }}>
                  {ip.title}
                </h4>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#f0f0f0]">
                  <span className="text-[#666] text-[13px] font-mono">{ip.number}</span>
                  <span className="text-[#999] text-[13px]">{ip.year}</span>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Know-How Section */}
      <section className="py-20" style={{ background: '#111827' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="block text-[12px] uppercase tracking-[2px] mb-2 font-semibold" style={{ color: '#1e5fa3' }}>CORE EXPERTISE</span>
            <h2 className="text-white font-bold text-[32px]" style={{ fontFamily: 'Barlow, sans-serif' }}>Proprietary Know-How</h2>
            <div className="w-16 h-1 bg-[#1e5fa3] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {knowHowData.map((item, i) => (
              <div key={i} className="p-8 rounded-[2px]" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="text-[#1e5fa3] font-bold text-[48px] mb-4 opacity-50" style={{ fontFamily: 'Barlow, sans-serif', lineHeight: 1 }}>
                  0{i + 1}
                </div>
                <h3 className="text-white font-bold text-[20px] mb-4" style={{ fontFamily: 'Barlow, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-[15px] text-[rgba(255,255,255,0.7)] leading-[1.7]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
