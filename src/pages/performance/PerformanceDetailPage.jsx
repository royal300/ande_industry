import { useParams } from 'react-router-dom';
import PageHero from '../../components/common/PageHero';
import SectionHeader from '../../components/common/SectionHeader';
import PrimaryButton from '../../components/common/PrimaryButton';
import { performanceDetailData } from '../../data/performanceData';

export default function PerformanceDetailPage() {
  const { industry } = useParams();
  const data = performanceDetailData[industry];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Industry Not Found</h1>
          <PrimaryButton label="Back to Performance" href="/performance" variant="filled" />
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero
        title={data.industry}
        subtitle={data.description}
        breadcrumb={`Home / Performance / ${data.industry}`}
      />

      <section className="py-20" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-16">
            {data.stats.map((stat) => (
              <div key={stat.label} className="p-8 text-center rounded-sm" style={{ background: '#f5f7fa', border: '1px solid #e8e8e8' }}>
                <div className="stat-number">{stat.value}</div>
                <p className="mt-2 text-sm" style={{ color: '#666' }}>{stat.label}</p>
              </div>
            ))}
          </div>

          <SectionHeader label="Project References" title={`${data.industry} Projects`} />

          <div className="space-y-4">
            {data.projects.map((p, i) => (
              <div
                key={i}
                className="flex flex-wrap items-center gap-6 p-6 rounded-sm"
                style={{ background: '#f5f7fa', border: '1px solid #e8e8e8' }}
              >
                <div
                  className="font-bold text-2xl flex-shrink-0"
                  style={{ fontFamily: 'Barlow, sans-serif', color: '#1e5fa3', width: 40 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold" style={{ fontFamily: 'Barlow, sans-serif', fontSize: 16, color: '#1a1a2a' }}>
                    {p.name}
                  </h4>
                  <p className="text-sm mt-1" style={{ color: '#666' }}>{p.location} · {p.capacity}</p>
                </div>
                <div className="flex-shrink-0 font-bold" style={{ color: '#1e5fa3', fontFamily: 'Barlow, sans-serif', fontSize: 18 }}>
                  {p.year}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <PrimaryButton label="Contact Our Team" href="/company/contact" variant="filled" />
          </div>
        </div>
      </section>
    </>
  );
}
