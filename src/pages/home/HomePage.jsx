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
    cta: { label: 'Explore Technology', href: '/technology' },
    image: '/images/hero_slide_1_1780751463278.png',
  },
  {
    id: 2,
    title: 'Precision Engineering. Proven Performance.',
    subtitle: 'Over 90 systems commissioned in top global steel plants.',
    cta: { label: 'View Our Products', href: '/products' },
    image: '/images/hero_slide_2_1780751477217.png',
  },
  {
    id: 3,
    title: 'Innovation at Every Stage',
    subtitle: 'From design to commissioning — ANDE partners with you through the full project lifecycle.',
    cta: { label: 'Our Services', href: '/services' },
    image: '/images/hero_slide_3_1780751488962.png',
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

/* ──────────────── Technology Section ──────────────── */
const homeTechData = [
  { title: 'PCI for Furnace & Kiln', desc: 'Advanced Pulverized Coal Injection systems engineered for blast furnaces.', image: '/images/tech_pneumatic_1780751853220.png' },
  { title: 'Grinding', desc: 'High-performance grinding solutions tailored for iron ore and coal.', image: '/images/tech_grinding_1780751799211.png' },
  { title: 'Crushing & Sizing', desc: 'Robust crushing and screening equipment for primary and secondary reduction.', image: '/images/tech_crushing_1780751814463.png' },
  { title: 'Drying & Preheating', desc: 'Custom-designed rotary drum dryers and preheaters for moisture removal.', image: '/images/tech_drying_1780751825785.png' },
  { title: 'Feeding & Metering', desc: 'Precision weighing, feeding, and metering systems ensuring accurate dosing.', image: '/images/tech_feeding_1780751840036.png' },
  { title: 'Pneumatic Conveying', desc: 'Dense-phase and dilute-phase pneumatic conveying systems.', image: '/images/tech_pneumatic_1780751853220.png' },
  { title: 'Pelletizing', desc: 'Iron ore pelletizing technology from concentrate preparation to firing.', image: '/images/tech_drying_1780751825785.png' },
  { title: 'Sintering', desc: 'Sinter plant engineering covering raw material blending and ignition.', image: '/images/tech_lime_1780751871313.png' },
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
              links={[
                { label: 'Technical Features', href: `/technology` },
                { label: 'Application', href: `/technology` }
              ]}
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
    { name: 'Hoa Phat Steel - 3500m³ BF PCI System' },
    { name: 'TATA Steel - 600 t/d Active Lime Plant' },
    { name: 'POSCO - 400 m² Sinter Plant Upgrade' },
  ],
  power: [
    { name: 'NTPC Barh - 5x660MW Coal Milling System' },
    { name: 'Datang Power - Coal Handling Plant' },
    { name: 'Formosa Power - Pneumatic Conveying Upgrade' },
  ],
  mining: [
    { name: 'Codelco - Copper Concentrator' },
    { name: 'Fortescue - Iron Ore Beneficiation' },
    { name: 'Kinross - Lead Smelting Project' },
  ]
};

function PerformanceSection() {
  const [activeTab, setActiveTab] = useState('metallurgical');
  const [fadeState, setFadeState] = useState('in'); // 'in' or 'out'
  const projects = trackRecordData[activeTab];

  const tabImages = {
    metallurgical: '/images/hero_slide_1_1780751463278.png',
    power: '/images/tech_drying_1780751825785.png',
    mining: '/images/tech_grinding_1780751799211.png'
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
            <div className="w-full md:w-[280px] h-[200px] md:h-auto flex-shrink-0 rounded-sm bg-cover bg-center" style={{ backgroundImage: `url(${tabImages[activeTab]})` }}>
            </div>
            
            {/* Right Project List */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="mb-6">
                {projects.map((p, i) => (
                  <Link
                    key={i}
                    to="/performance"
                    className="block py-3 transition-colors duration-200 border-b border-gray-100"
                    style={{ fontSize: '15px', color: '#1a1a2a' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#1e5fa3'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#1a1a2a'}
                  >
                    {p.name} <span className="ml-2">→</span>
                  </Link>
                ))}
              </div>
              <Link to="/performance" className="text-sm font-semibold transition-colors hover:text-blue-800" style={{ color: '#1e5fa3' }}>
                SEE ALL CASES →
              </Link>
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
      style={{ backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.85), rgba(17, 24, 39, 0.85)), url('/images/services_bg_1780751502543.png')` }}
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
        <div className="h-[460px] rounded-sm relative overflow-hidden flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/images/innovation_side_1780751516550.png')` }}>
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
          <p className="text-[#666666] text-[16px] mb-8" style={{ lineHeight: 1.7 }}>
            ANDE holds multiple patents and software copyrights in grinding, coal injection, and control systems. Innovation is not just a process — it's our culture.
          </p>
          
          <div className="mb-10 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-[40px] h-[40px] bg-[#e8f0fb] rounded flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" fill="none" stroke="#1e5fa3" viewBox="0 0 24 24" strokeWidth="2"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
              </div>
              <span className="font-semibold text-[#333]">40+ Patents & Copyrights</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[40px] h-[40px] bg-[#e8f0fb] rounded flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" fill="none" stroke="#1e5fa3" viewBox="0 0 24 24" strokeWidth="2"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
              </div>
              <span className="font-semibold text-[#333]">Proprietary Control Software</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[40px] h-[40px] bg-[#e8f0fb] rounded flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" fill="none" stroke="#1e5fa3" viewBox="0 0 24 24" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18 9l-5 5-4-4-4 4"/></svg>
              </div>
              <span className="font-semibold text-[#333]">Ongoing R&D Investment</span>
            </div>
          </div>
          
          <PrimaryButton label="LEARN MORE" href="/innovation" variant="filled" />
        </div>
      </div>
    </section>
  );
}

/* ──────────────── News Section ──────────────── */
const homeNewsData = [
  { cat: 'COMPANY', title: 'ANDE Expands Manufacturing Facility in Jinan', date: 'Oct 12, 2025', excerpt: 'The new 10,000 m² workshop will increase our heavy equipment production capacity by 30%.', image: '/images/news_card_1_1780751530210.png' },
  { cat: 'PROJECT STATUS', title: 'Successful Commissioning of 5000t/d Lime Kiln', date: 'Sep 28, 2025', excerpt: 'The turnkey active lime plant for TATA Steel achieved full capacity during performance tests.', image: '/images/news_card_2_1780751543543.png' },
  { cat: 'INDUSTRY NEWS', title: 'New Regulations Drive Demand for Ultra-Low Emission Systems', date: 'Aug 15, 2025', excerpt: 'Recent environmental standards are accelerating the adoption of our advanced bag filter technologies.', image: '/images/news_card_3_1780751556923.png' },
];

function NewsSection() {
  return (
    <section className="py-20" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader label="LATEST FROM ANDE" title="News & Updates" centered />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {homeNewsData.map((news, i) => (
            <Link 
              key={i} 
              to="/news" 
              className="flex flex-col bg-white rounded-sm group overflow-hidden transition-all duration-300 ease-in-out"
              style={{ border: '1px solid #e8e8e8', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
              }}
            >
              {/* Image Area */}
              <div className="h-[220px] bg-cover bg-center" style={{ backgroundImage: `url(${news.image})` }} />
              
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[11px] font-bold uppercase tracking-[2px] mb-2" style={{ color: '#1e5fa3' }}>{news.cat}</span>
                <h3 className="font-semibold text-[17px] mb-2 transition-colors duration-200" style={{ color: '#1a1a2a', fontFamily: 'Barlow, sans-serif' }}>
                  {news.title}
                </h3>
                <span className="text-[13px] mb-3 block" style={{ color: '#999999' }}>{news.date}</span>
                <p className="text-[14px] line-clamp-3 mb-6" style={{ color: '#666666', lineHeight: 1.6 }}>{news.excerpt}</p>
                
                <div className="mt-auto text-[13px] font-semibold flex items-center group-hover:translate-x-1 transition-transform" style={{ color: '#1e5fa3' }}>
                  Read More <span className="ml-1">→</span>
                </div>
              </div>
            </Link>
          ))}
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
