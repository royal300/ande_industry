import { useState } from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import AnimatedSection from '../components/common/AnimatedSection';
import { referenceData } from '../data/referenceData';

export default function ReferencePage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <PageHero
        title="Project References"
        subtitle="A comprehensive list of our global project execution across metallurgical and industrial sectors."
        breadcrumb="Home / Reference"
      />

      <section className="pt-8 pb-16 md:pt-10 md:pb-24" style={{ background: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="TRACK RECORD"
            title="Global Project Reference List"
            centered
          />

          {/* Mobile swipe helper */}
          <div className="lg:hidden flex items-center justify-end text-xs text-[#1e5fa3] font-semibold mt-6 mb-2 gap-1 animate-pulse">
            <span>Swipe to see more categories</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>

          {/* Navigation Tabs */}
          <div className="mb-8 flex justify-start lg:justify-center overflow-x-auto pb-4 gap-2 scrollbar-hide border-b border-gray-200">
            {referenceData.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`whitespace-nowrap px-6 py-3 font-bold text-[14px] uppercase tracking-wider transition-all duration-300 rounded-[2px] border ${
                  activeTab === idx
                    ? 'bg-[#1e5fa3] text-white border-[#1e5fa3] shadow-md'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#1e5fa3] hover:text-[#1e5fa3]'
                }`}
                style={{ fontFamily: 'Barlow, sans-serif' }}
              >
                {tab.title.replace('Reference List of ', '').replace('References of ', '')}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div 
            key={activeTab}
            className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 md:p-10 animate-fade-in"
          >
            <h3 
              className="text-2xl font-bold text-[#1a1a2a] mb-6 pb-4 border-b border-gray-100"
              style={{ fontFamily: 'Barlow, sans-serif' }}
            >
              {referenceData[activeTab].title}
            </h3>

            {/* Check if Table has sections (like PCI System) */}
            {referenceData[activeTab].sections ? (
              <div className="space-y-12">
                {referenceData[activeTab].sections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-4">
                    <h4 
                      className="text-lg font-bold text-[#1e5fa3] flex items-center gap-2 uppercase tracking-wide"
                      style={{ fontFamily: 'Barlow, sans-serif' }}
                    >
                      <span className="w-1.5 h-6 bg-[#1e5fa3] inline-block rounded-full"></span>
                      {section.name}
                    </h4>

                    <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
                      <table className="w-full text-left border-collapse text-sm">
                        <thead>
                          <tr className="bg-[#0d1b2a] text-white">
                            {referenceData[activeTab].columns.map((col, colIdx) => (
                              <th 
                                key={colIdx} 
                                className="px-6 py-4 font-bold tracking-wider uppercase text-xs border-r border-[#1a2d42] last:border-0"
                                style={{ fontFamily: 'Barlow, sans-serif' }}
                              >
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 text-gray-700">
                          {section.rows.map((row, rIdx) => {
                            // Assign sequential SN for China Market if empty
                            const displayRow = [...row];
                            if (section.name === 'China & Other Abroad Markets' && !displayRow[0]) {
                              displayRow[0] = (rIdx + 1).toString();
                            }
                            return (
                              <tr 
                                key={rIdx} 
                                className="hover:bg-blue-50/40 transition-colors duration-150 odd:bg-gray-50/50"
                              >
                                {displayRow.map((val, cellIdx) => (
                                  <td 
                                    key={cellIdx} 
                                    className="px-6 py-4 whitespace-pre-line border-r border-gray-100 last:border-0 leading-relaxed font-sans"
                                  >
                                    {val}
                                  </td>
                                ))}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Simple Table structure (Sinter, GCP, Pelletizing, Ironmaking)
              <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#0d1b2a] text-white">
                      {referenceData[activeTab].columns.map((col, colIdx) => (
                        <th 
                          key={colIdx} 
                          className="px-6 py-4 font-bold tracking-wider uppercase text-xs border-r border-[#1a2d42] last:border-0"
                          style={{ fontFamily: 'Barlow, sans-serif' }}
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    {referenceData[activeTab].rows.map((row, rIdx) => (
                      <tr 
                        key={rIdx} 
                        className="hover:bg-blue-50/40 transition-colors duration-150 odd:bg-gray-50/50"
                      >
                        {row.map((val, cellIdx) => (
                          <td 
                            key={cellIdx} 
                            className="px-6 py-4 whitespace-pre-line border-r border-gray-100 last:border-0 leading-relaxed font-sans"
                          >
                            {/* Make '07' or other single digits commissioning years prettier if needed */}
                            {colIdxToYearFormat(activeTab, cellIdx, val)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

// Small helper function to format short commissioning year values nicely if applicable
function colIdxToYearFormat(activeTab, cellIdx, val) {
  // Check if this is Table 5 (index 4) and Commissioning Time column (index 3)
  if (activeTab === 4 && cellIdx === 3) {
    if (val === '07') return '2007';
    if (val === '04') return '2004';
    if (val === '12') return '2012';
  }
  return val;
}
