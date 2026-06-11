import { useState } from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import { referenceData } from '../data/referenceData';

export default function ReferencePage() {
  const [activeTab, setActiveTab] = useState(0);

  const activeData = referenceData[activeTab];

  return (
    <>
      <PageHero
        title="Project References"
        subtitle="A comprehensive list of our global project execution across metallurgical and industrial sectors."
        breadcrumb="Home / Reference"
      />

      <section style={{ background: '#f8f9fa', paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <SectionHeader
            label="TRACK RECORD"
            title="Global Project Reference List"
            centered
          />

          {/* Mobile swipe helper - always visible on small screens */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            marginTop: '1.5rem',
            marginBottom: '0.5rem',
            color: '#1e5fa3',
            fontWeight: '700',
            fontSize: '13px',
            fontFamily: 'Barlow, sans-serif',
          }}
            className="lg:hidden"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            <span>Swipe tabs to see all categories</span>
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>

          {/* Navigation Tabs */}
          <div style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '8px',
            paddingBottom: '1rem',
            borderBottom: '2px solid #e5e7eb',
            marginBottom: '2rem',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
          }}>
            {referenceData.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                style={{
                  whiteSpace: 'nowrap',
                  padding: '10px 20px',
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: '700',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  border: '2px solid',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  flexShrink: 0,
                  ...(activeTab === idx
                    ? {
                        background: '#1e5fa3',
                        color: '#fff',
                        borderColor: '#1e5fa3',
                        boxShadow: '0 4px 12px rgba(30,95,163,0.3)',
                      }
                    : {
                        background: '#fff',
                        color: '#4b5563',
                        borderColor: '#d1d5db',
                      }),
                }}
              >
                {tab.title.replace('Reference List of ', '').replace('References of ', '')}
              </button>
            ))}
          </div>

          {/* Active Tab Content - No animation, pure render */}
          <div
            key={activeTab}
            style={{
              background: '#fff',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
              padding: '2rem',
              opacity: 1,
              visibility: 'visible',
            }}
          >
            <h3 style={{
              fontSize: '22px',
              fontWeight: '700',
              color: '#1a1a2a',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '2px solid #f3f4f6',
              fontFamily: 'Barlow, sans-serif',
            }}>
              {activeData.title}
            </h3>

            {/* Sectioned table (PCI System) */}
            {activeData.sections ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {activeData.sections.map((section, sIdx) => (
                  <div key={sIdx}>
                    <h4 style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '16px',
                      fontWeight: '700',
                      color: '#1e5fa3',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '1rem',
                      fontFamily: 'Barlow, sans-serif',
                    }}>
                      <span style={{
                        display: 'inline-block',
                        width: '4px',
                        height: '22px',
                        background: '#1e5fa3',
                        borderRadius: '2px',
                        flexShrink: 0,
                      }} />
                      {section.name}
                    </h4>
                    <ReferenceTable columns={activeData.columns} rows={section.rows} sectionName={section.name} />
                  </div>
                ))}
              </div>
            ) : (
              /* Simple table */
              <ReferenceTable columns={activeData.columns} rows={activeData.rows} />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function ReferenceTable({ columns, rows, sectionName }) {
  return (
    <div style={{ overflowX: 'auto', border: '1px solid #e5e7eb', borderRadius: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
        <thead>
          <tr style={{ background: '#0d1b2a', color: '#fff' }}>
            {columns.map((col, colIdx) => (
              <th
                key={colIdx}
                style={{
                  padding: '14px 20px',
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: '700',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  borderRight: colIdx < columns.length - 1 ? '1px solid #1a2d42' : 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rIdx) => {
            const displayRow = [...row];
            if (sectionName === 'China & Other Abroad Markets' && !displayRow[0]) {
              displayRow[0] = (rIdx + 1).toString();
            }
            return (
              <tr
                key={rIdx}
                style={{
                  background: rIdx % 2 === 0 ? '#f9fafb' : '#ffffff',
                  borderBottom: '1px solid #f3f4f6',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#eff6ff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = rIdx % 2 === 0 ? '#f9fafb' : '#ffffff'; }}
              >
                {displayRow.map((val, cellIdx) => (
                  <td
                    key={cellIdx}
                    style={{
                      padding: '12px 20px',
                      borderRight: cellIdx < displayRow.length - 1 ? '1px solid #f3f4f6' : 'none',
                      whiteSpace: 'pre-line',
                      lineHeight: '1.6',
                      color: '#374151',
                    }}
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
  );
}
