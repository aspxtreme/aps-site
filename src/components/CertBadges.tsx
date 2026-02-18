import React from 'react';

const CertBadges = () => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <a
        href="https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/aps-cal-eprocure-SB-DVBE-certification-id-2048903.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex', alignItems: 'center', gap: '9px',
          padding: '7px 14px', borderRadius: '6px',
          border: '1.5px solid #C8102E', color: '#C8102E',
          background: '#FEF2F2', fontSize: '12px',
          fontWeight: '700', letterSpacing: '0.8px', textTransform: 'uppercase',
          textDecoration: 'none'
        }}
      >
        <img
          src="https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/ca-icon-red.svg"
          alt="CA"
          style={{ width: '28px', height: '20px', objectFit: 'contain' }}
        />
        CA Certified SB
      </a>
      <a
        href="https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/aps-cal-eprocure-SB-DVBE-certification-id-2048903.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex', alignItems: 'center', gap: '9px',
          padding: '7px 14px', borderRadius: '6px',
          border: '1.5px solid #1D4ED8', color: '#1D4ED8',
          background: '#DBEAFE', fontSize: '12px',
          fontWeight: '700', letterSpacing: '0.8px', textTransform: 'uppercase',
          textDecoration: 'none'
        }}
      >
        <img
          src="https://cdn.jsdelivr.net/gh/aspxtreme/aps-images@main/ca-icon-blue.svg"
          alt="CA"
          style={{ width: '28px', height: '20px', objectFit: 'contain' }}
        />
        CA Certified DVBE
      </a>
    </div>
  );
};

export default CertBadges;
