'use client';

import { useEffect, useState } from 'react';

const CALCOM_LINK = process.env.NEXT_PUBLIC_CALCOM_LINK || 'vikramsankhala/30min';
const CALCOM_URL = `https://app.cal.com/${CALCOM_LINK}`;

export default function CalEmbed() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ minHeight: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, color: 'var(--text-dim)' }}>
        <p>Loading calendar...</p>
        <a href={CALCOM_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sap-blue)' }}>
          Open in new tab
        </a>
      </div>
    );
  }

  return (
    <iframe
      src={CALCOM_URL}
      title="Book a session"
      style={{
        width: '100%',
        height: '100%',
        minHeight: '630px',
        border: 0,
      }}
    />
  );
}
