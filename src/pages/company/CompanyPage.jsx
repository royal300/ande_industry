import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';

export default function CompanyPage() {
  return (
    <>
      <PageHero
        title="Company Profile"
        subtitle="Ande Industries Pvt. Ltd. — Bridging Global Manufacturing Excellence"
        breadcrumb="Home / Company"
      />

      {/* Hero Image */}
      <div className="w-full" style={{ maxHeight: '480px', overflow: 'hidden' }}>
        <img
          src="/images/ande_image.jpg"
          alt="Ande Industries"
          style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* About Section */}
      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader label="ABOUT US" title="About Ande Industries Pvt. Ltd." />

          <div className="space-y-5 text-[#555] text-[16px] leading-[1.85] mt-8">
            <p>
              Ande Industries Pvt. Ltd. is a strategic corporate entity incorporated under the Indian Companies Act, 2013, designed to serve as the pivotal Indian arm of our globally renowned parent organization, <strong style={{ color: '#1a1a2a' }}>Ande Metallurgical Machinery Co. Ltd., Jinan, China</strong>. Established with a clear mandate by our visionary promoters, we function as the vital bridge connecting world-class manufacturing excellence with emerging market opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Global Heritage */}
      <section className="py-16" style={{ background: '#f5f7fa' }}>
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader label="GLOBAL HERITAGE" title="Our Global Heritage" />
          <div className="space-y-5 text-[#555] text-[16px] leading-[1.85] mt-8">
            <p>
              Our foundation is built upon the formidable legacy of Ande China, a premier manufacturing powerhouse with a comprehensive global footprint. For years, our mother company has set industry benchmarks in manufacturing scale, technological innovation, and supply chain efficiency, delivering high-quality products to markets across the world. Ande Industries Pvt. Ltd. was conceived to harness this global expertise and tailor it for strategic regional expansion.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Incubation */}
      <section className="py-16" style={{ background: '#fff' }}>
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader label="OUR JOURNEY" title="The Strategic Incubation" />
          <div className="space-y-5 text-[#555] text-[16px] leading-[1.85] mt-8">
            <p>
              While Ande Industries Pvt. Ltd. was officially incorporated three years ago, this period has served as a deliberate and strategic incubation phase. Rather than rushing into operations, we dedicated this time to deep market analysis, regulatory alignment, and establishing a robust infrastructural framework. We have meticulously studied the market dynamics, supply chain logistics, and localization strategies required to ensure that our launch is both impactful and sustainable.
            </p>
          </div>
        </div>
      </section>

      {/* Launching Operations */}
      <section className="py-16" style={{ background: '#f5f7fa' }}>
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader label="OPERATIONS" title="Launching Operations & Future Trajectory" />
          <div className="space-y-5 text-[#555] text-[16px] leading-[1.85] mt-8">
            <p>
              Having laid a solid foundation, Ande Industries Pvt. Ltd. is now officially commencing active business operations. Our primary focus is to facilitate and accelerate the expansion of Ande China's market presence.
            </p>
            <p>As we activate our operational phase, our core objectives include:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: 'Market Penetration',
                  desc: 'Introducing and distributing the globally trusted manufacturing portfolio of Ande China to new, high-growth sectors.'
                },
                {
                  title: 'Supply Chain Integration',
                  desc: 'Creating a seamless, efficient supply chain network that connects our global manufacturing hubs with regional demand.'
                },
                {
                  title: 'Strategic Partnerships',
                  desc: 'Building alliances with key domestic stakeholders, distributors, and industry leaders to foster mutual growth.'
                },
                {
                  title: 'Operational Excellence',
                  desc: 'Upholding the rigorous quality standards and corporate governance principles established by our parent company.'
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-sm"
                  style={{ background: '#fff', border: '1px solid #e8e8e8', borderTop: '4px solid #1e5fa3' }}
                >
                  <h4 className="font-bold text-[#1a1a2a] text-[17px] mb-2" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    {item.title}
                  </h4>
                  <p className="text-[14px] text-[#666] leading-[1.7]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20" style={{ background: '#0d1b2a' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span
            className="inline-block font-bold uppercase tracking-widest text-[11px] mb-4"
            style={{ color: '#1e5fa3', letterSpacing: '3px' }}
          >
            OUR VISION
          </span>
          <h2
            className="text-white font-bold text-[30px] md:text-[36px] leading-tight mb-8"
            style={{ fontFamily: 'Barlow, sans-serif' }}
          >
            "To be the premier catalyst for global manufacturing excellence in the region"
          </h2>
          <p className="text-[#aaa] text-[16px] leading-[1.85] max-w-3xl mx-auto">
            To be the premier catalyst for global manufacturing excellence in the region, driving the expansion of Ande Industries while delivering unmatched value, quality, and innovation to our partners and clients.
          </p>
          <p className="text-[#aaa] text-[16px] leading-[1.85] max-w-3xl mx-auto mt-5">
            We are not just bringing a global brand to a new market; we are building a localized engine for global manufacturing process. As we step into this active phase of operations, Ande Industries Pvt. Ltd. is fully equipped to translate international success into regional leadership.
          </p>
        </div>
      </section>
    </>
  );
}
