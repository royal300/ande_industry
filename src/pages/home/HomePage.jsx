import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/common/SectionHeader';
import TechCard from '../../components/common/TechCard';
import PrimaryButton from '../../components/common/PrimaryButton';
import AnimatedSection from '../../components/common/AnimatedSection';

/* ──────────────── Hero Slider ──────────────── */
const slides = [
  {
    id: 1,
    title: 'Leading Metallurgical Equipment Solutions',
    subtitle: 'Engineering excellence for the global steel and mining industry.',
    cta: { label: 'View Our Products', href: '/products' },
    image: '/images/hero_slide_1_1780751463278.webp',
  },
  {
    id: 2,
    title: 'Precision Engineering. Proven Performance.',
    subtitle: 'Over 90 systems commissioned in top global steel plants.',
    cta: { label: 'View Our Products', href: '/products' },
    image: '/images/hero_slide_2_1780751477217.webp',
  },
  {
    id: 3,
    title: 'Innovation at Every Stage',
    subtitle: 'From design to commissioning — ANDE partners with you through the full project lifecycle.',
    cta: { label: 'Our Services', href: '/services' },
    image: '/images/hero_slide_3_1780751488962.webp',
  },
];

function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        height: '580px',
        backgroundColor: '#0d1b2a',
      }}
    >
      {/* SVG industrial line-art pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="industrial-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 100 L100 0 M50 150 L150 50 M-50 50 L50 -50" stroke="#ffffff" strokeWidth="0.5" fill="none" opacity="0.3"/>
              <circle cx="50" cy="50" r="2" fill="#ffffff" opacity="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#industrial-pattern)" />
        </svg>
      </div>

      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-opacity duration-700 ease-in-out bg-cover bg-center"
          style={{ opacity: idx === active ? 1 : 0, zIndex: idx === active ? 10 : 1, backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.7), rgba(13, 27, 42, 0.7)), url(${slide.image})` }}
        >
          <h1
            className="text-white font-bold mb-6"
            style={{ fontFamily: 'Barlow, sans-serif', fontSize: '48px', maxWidth: '800px', lineHeight: 1.2 }}
          >
            {slide.title}
          </h1>
          <p
            className="mb-8"
            style={{ color: 'rgba(255,255,255,0.85)', fontSize: '20px', maxWidth: '700px' }}
          >
            {slide.subtitle}
          </p>
          <PrimaryButton label={slide.cta.label} href={slide.cta.href} variant="filled" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={() => setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-colors duration-200"
        style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.15)', borderRadius: '50%' }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
        aria-label="Previous slide"
      >
        <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => setActive((prev) => (prev + 1) % slides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-colors duration-200"
        style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.15)', borderRadius: '50%' }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
        aria-label="Next slide"
      >
        <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            style={{
              width: '10px', height: '10px', borderRadius: '50%', padding: 0, border: 'none', cursor: 'pointer',
              background: idx === active ? '#ffffff' : 'rgba(255,255,255,0.4)',
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

/* ──────────────── Quote Banner ──────────────── */
function StatsBar() {
  return (
    <section className="w-full py-10 bg-[#1e5fa3] relative overflow-hidden select-none">
      {/* Background large watermark quotation marks */}
      <div className="absolute -left-4 -top-8 text-[180px] font-serif text-white opacity-[0.08] leading-none pointer-events-none select-none">
        “
      </div>
      <div className="absolute -right-4 -bottom-16 text-[180px] font-serif text-white opacity-[0.08] leading-none pointer-events-none select-none">
        ”
      </div>
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <blockquote className="text-white text-base md:text-[22px] font-normal italic leading-relaxed tracking-wide" style={{ fontFamily: 'Barlow, sans-serif' }}>
          “ Deliver high quality products to customers, provide innovative metallurgical equipment solutions, and lead the market trend ”
        </blockquote>
      </div>
    </section>
  );
}

/* ──────────────── Technology Section ──────────────── */
const homeTechData = [
  { title: 'PCI for Furnace & Kiln', desc: 'Advanced Pulverized Coal Injection systems engineered for blast furnaces.', image: '/Technology/PulvarizedCoalInjection.webp' },
  { title: 'Grinding', desc: 'High-performance grinding solutions tailored for iron ore and coal.', image: '/Technology/Grinding.webp' },
  { title: 'Crushing & Sizing', desc: 'Robust crushing and screening equipment for primary and secondary reduction.', image: '/Technology/crushingsizing.webp' },
  { title: 'Drying & Preheating', desc: 'Custom-designed rotary drum dryers and preheaters for moisture removal.', image: '/Technology/dying.webp' },
  { title: 'Feeding & Metering', desc: 'Precision weighing, feeding, and metering systems ensuring accurate dosing.', image: '/Technology/feedingmetering.webp' },
  { title: 'Pneumatic Conveying', desc: 'Dense-phase and dilute-phase pneumatic conveying systems.', image: '/Technology/pneumatic.webp' },
  { title: 'Pelletizing', desc: 'Iron ore pelletizing technology from concentrate preparation to firing.', image: '/Technology/pelletizing.webp' },
  { title: 'Sintering', desc: 'Sinter plant engineering covering raw material blending and ignition.', image: '/Technology/sinetering.webp' },
];

function HomeTechnology() {
  return (
    <section className="py-20" style={{ background: '#f5f7fa' }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="WHAT WE DO"
          title="Our Technology"
          subtitle="Innovative metallurgical equipment solutions for the global market"
          centered
        />
        <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {homeTechData.map((tech, i) => (
            <TechCard
              key={i}
              title={tech.title}
              description={tech.desc}
              image={tech.image}
              href="/technology"
            />
          ))}
        </AnimatedSection>
        <div className="flex justify-center">
          <PrimaryButton label="VIEW ALL TECHNOLOGY →" href="/technology" variant="outlined" />
        </div>
      </div>
    </section>
  );
}

/* ──────────────── Performance Section ──────────────── */
const trackRecordData = {
  metallurgical: [
    { name: '600/800 TPD Active Lime Rotary Kiln Line Project of Zouping Qifa Material Ltd.' },
    { name: '600TPD Active Lime Rotary Kiln Line Project of Jigang Refractory Ltd.' },
  ],
  power: [
    { name: 'ANDE is located in Chengdong Industrial Park, Mingshui Economic Development' },
    { name: 'Coal injection system for 31260 m3 blast furnace of Hebei Jingye iron and Steel Co., Ltd' },
  ],
  mining: [
    { name: 'Mengzi Mining and Metallurgical Co., Ltd. 60 thousand t/a lead smelting project pulverized coal preparation system' },
  ]
};

function PerformanceSection() {
  const [activeTab, setActiveTab] = useState('metallurgical');
  const [fadeState, setFadeState] = useState('in'); // 'in' or 'out'
  const projects = trackRecordData[activeTab];

  const tabImages = {
    metallurgical: '/images/hero_slide_1_1780751463278.webp',
    power: '/images/tech_drying_1780751825785.webp',
    mining: '/images/tech_grinding_1780751799211.webp'
  };

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setFadeState('out');
    setTimeout(() => {
      setActiveTab(tab);
      setFadeState('in');
    }, 200);
  };

  return (
    <section className="py-20" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="OUR TRACK RECORD"
          title="Proven Performance"
          subtitle="Trusted by leading metallurgical enterprises across the globe"
          centered
        />
        
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          {[
            { id: 'metallurgical', label: 'Metallurgical Industry' },
            { id: 'power', label: 'Power Generation' },
            { id: 'mining', label: 'Mining Industry' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => handleTabChange(t.id)}
              className="px-8 py-3 transition-colors duration-200"
              style={{
                fontFamily: 'Barlow, sans-serif', fontSize: '15px',
                color: activeTab === t.id ? '#1e5fa3' : '#333333',
                borderBottom: `3px solid ${activeTab === t.id ? '#1e5fa3' : 'transparent'}`,
                fontWeight: activeTab === t.id ? '600' : '400',
              }}
              onMouseEnter={(e) => activeTab !== t.id && (e.currentTarget.style.color = '#1a1a2a')}
              onMouseLeave={(e) => activeTab !== t.id && (e.currentTarget.style.color = '#333333')}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatedSection>
          <div 
            className="flex flex-col md:flex-row gap-12 transition-opacity duration-300"
            style={{ opacity: fadeState === 'in' ? 1 : 0 }}
          >
            {/* Left Image Area */}
            <div className="w-full md:w-[280px] h-[200px] flex-shrink-0 rounded-sm bg-cover bg-center" style={{ backgroundImage: `url(${tabImages[activeTab]})` }}>
            </div>
            
            {/* Right Project List */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="space-y-2">
                {projects.map((p, i) => (
                  <div
                    key={i}
                    className="py-4 border-b border-gray-100 flex items-start text-left text-gray-800 font-semibold"
                    style={{ fontSize: '15px', lineHeight: '1.6' }}
                  >
                    <span className="text-[#1e5fa3] mr-3 mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-[#1e5fa3]"></span>
                    <span>{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ──────────────── Services Section ──────────────── */
const servicesList = [
  'Design & Engineering', 'Installation Supervision', 'Commissioning',
  'Operation', 'Training', 'Spares',
  'Diagnosis & Consultation', 'Upgrades & Retrofits', 'Intelligent Service Center'
];

function ServicesSection() {
  return (
    <section 
      className="py-20 w-full relative bg-cover bg-center" 
      style={{ backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.85), rgba(17, 24, 39, 0.85)), url('/images/services_bg_1780751502543.webp')` }}
    >
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, transparent 1px, transparent 24px, rgba(255,255,255,0.015) 25px)',
          backgroundSize: '24px 24px'
        }}
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Col */}
        <div>
          <span className="block text-[12px] uppercase tracking-[2px] mb-4" style={{ color: '#1e5fa3', fontFamily: 'Source Sans 3, sans-serif' }}>
            COMPREHENSIVE SUPPORT
          </span>
          <h2 className="text-white font-bold text-[36px] mb-6" style={{ fontFamily: 'Barlow, sans-serif' }}>
            End-to-End Services
          </h2>
          <p className="text-[16px] text-white opacity-80 mb-8" style={{ lineHeight: 1.8 }}>
            With our updated technology and unique experience, ANDE is committed to providing comprehensive services for the full lifespan of your plant.
          </p>
          <PrimaryButton label="READ MORE →" href="/services" variant="white-outlined" />
        </div>
        
        {/* Right Col */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {servicesList.map(s => (
            <div 
              key={s}
              className="px-4 py-2 text-[13px] text-white text-center rounded-[3px] transition-colors duration-250 cursor-default"
              style={{ border: '1px solid rgba(255,255,255,0.2)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#0d1b2a'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#ffffff'; }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── Innovation Section ──────────────── */
function InnovationSection() {
  return (
    <section className="py-20" style={{ background: '#f5f7fa' }}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image Placeholder */}
        <div className="h-[460px] rounded-sm relative overflow-hidden flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/images/innovation_side_1780751516550.webp')` }}>
          <div className="absolute inset-0 bg-blue-900 opacity-20 mix-blend-multiply" />
        </div>
        
        {/* Right: Text */}
        <div>
          <span className="block text-[12px] uppercase tracking-[2px] mb-2" style={{ color: '#1e5fa3' }}>
            R&D EXCELLENCE
          </span>
          <h2 className="font-bold text-[#1a1a2a] text-[32px] mb-6" style={{ fontFamily: 'Barlow, sans-serif' }}>
            Continuous Innovation
          </h2>
          <p className="text-[#666666] text-[15px] mb-4" style={{ lineHeight: 1.7 }}>
            Whenever customer faces challenge of quality, productivity, operation cost or emission, we usually take it as potential opportunity for improvement and development. Through continuous improvement and innovation, ANDE can make contribution to customer’s sustainable development, and help itself obtain leading technology and knowhow.
          </p>
          <p className="text-[#666666] text-[15px] mb-8 font-semibold" style={{ lineHeight: 1.7 }}>
            In the company, innovation is an orientation, and is immersed in our culture.
          </p>

          
          <PrimaryButton label="LEARN MORE" href="/innovation" variant="filled" />
        </div>
      </div>
    </section>
  );
}

/* ──────────────── News Section ──────────────── */
function NewsSection() {
  return (
    <section className="py-20" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader label="LATEST FROM ANDE" title="News & Updates" centered />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Column 1: Company */}
          <div 
            className="bg-[#f8fafc] p-8 rounded-sm flex flex-col h-full border border-gray-100 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              <h3 className="font-bold text-xs uppercase tracking-[2px] text-gray-400">Company</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-6 font-medium">
              As an innovative specialist involved in research & design, engineering, manufacturing and technical service.
            </p>
            <div className="mt-auto pt-4">
              <a 
                href="http://www.andeindustries.com/pageinfo-13.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold text-[#1e5fa3] hover:text-[#154f8a] uppercase tracking-wider group"
              >
                Read More <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Column 2: Project Status */}
          <div 
            className="bg-[#f8fafc] p-8 rounded-sm flex flex-col h-full border border-gray-100 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-green-600"></span>
              <h3 className="font-bold text-xs uppercase tracking-[2px] text-gray-400">Project Status</h3>
            </div>
            <ul className="space-y-6 flex-1">
              <li className="border-b border-gray-200/60 pb-4 last:border-0 last:pb-0">
                <a 
                  href="http://www.andeindustries.com/info-18.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-800 text-[13.5px] leading-relaxed font-semibold hover:text-[#1e5fa3] transition-colors"
                >
                  Summary of the five major scientific and technological achievements of global energy saving and emission reduction in 2014
                </a>
              </li>
              <li className="last:border-0 last:pb-0">
                <a 
                  href="http://www.andeindustries.com/info-17.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-800 text-[13.5px] leading-relaxed font-semibold hover:text-[#1e5fa3] transition-colors"
                >
                  Maanshan Iron & Steel (Hefei) Environmental Relocation Project 3 Sintering Project started
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Industry */}
          <div 
            className="bg-[#f8fafc] p-8 rounded-sm flex flex-col h-full border border-gray-100 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <h3 className="font-bold text-xs uppercase tracking-[2px] text-gray-400">Industry</h3>
            </div>
            <ul className="space-y-6 flex-1">
              <li className="border-b border-gray-200/60 pb-4 last:border-0 last:pb-0">
                <a 
                  href="http://www.andeindustries.com/info-17.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-800 text-[13.5px] leading-relaxed font-semibold hover:text-[#1e5fa3] transition-colors"
                >
                  Maanshan Iron & Steel (Hefei) Environmental Relocation Project 3 Sintering Project started
                </a>
              </li>
              <li className="last:border-0 last:pb-0">
                <a 
                  href="http://www.andeindustries.com/info-25.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-800 text-[13.5px] leading-relaxed font-semibold hover:text-[#1e5fa3] transition-colors"
                >
                  Shigang Company’s relocation and upgrading project signed a cooperation agreement
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── Newsletter Strip ──────────────── */
function NewsletterStrip() {
  return (
    <section className="w-full py-12" style={{ background: '#1e5fa3' }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-white font-bold text-[24px]" style={{ fontFamily: 'Barlow, sans-serif' }}>
          Stay updated on your industry
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full sm:w-[280px] px-5 py-3 rounded-sm text-[#333] outline-none"
            style={{ background: '#ffffff', border: 'none' }}
          />
          <button 
            className="px-6 py-3 font-semibold text-white uppercase tracking-wider rounded-sm transition-colors duration-200"
            style={{ background: '#0d1b2a', fontSize: '14px' }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#1a3a5c'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#0d1b2a'}
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── Home Page ──────────────── */
export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatsBar />
      <HomeTechnology />
      <PerformanceSection />
      <ServicesSection />
      <InnovationSection />
      <NewsSection />
      <NewsletterStrip />
    </>
  );
}
