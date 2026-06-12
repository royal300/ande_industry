import PageHero from '../../components/common/PageHero';

export default function InnovationPage() {
  return (
    <>
      <PageHero
        title="Innovation"
        subtitle="Pioneering technology through continuous R&D"
        breadcrumb="Home / Innovation"
      />

      <section className="py-24" style={{ background: '#fff' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8" style={{ background: '#e8f0fb' }}>
            <svg 
              width="28" height="28" viewBox="0 0 24 24" fill="none" 
              stroke="#1e5fa3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>

          <h2 className="font-bold text-[#1a1a2a] mb-8" style={{ fontFamily: 'Barlow, sans-serif', fontSize: '38px', lineHeight: 1.2, letterSpacing: '-0.5px' }}>
            Patent Copyright Know-how
          </h2>

          <p className="text-[#333333] font-medium leading-[2] text-lg max-w-3xl mx-auto" style={{ fontFamily: 'Barlow, sans-serif' }}>
            In the company, innovation is an orientation, and is immersed in our culture. Whenever customer faces challenge of quality, productivity, operation cost or emission, we usually take it as potential opportunity for improvement and development. Through continuous improvement and innovation, ANDE can make contribution to customer’s sustainable development, and help itself obtain leading technology and knowhow.
          </p>
        </div>
      </section>
    </>
  );
}
