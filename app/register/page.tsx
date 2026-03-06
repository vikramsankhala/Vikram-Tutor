'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import styles from './page.module.css';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company: company || undefined }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Registration failed');
        return;
      }

      setSuccess(true);
      setDownloadUrl(data.downloadUrl || `/api/download?token=${data.downloadToken}`);
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <>
        <Navbar />
        <main className={styles.registerPage}>
          <div className={styles.successCard}>
            <h1>Registration Successful</h1>
            <p>Thank you for registering. Click below to download the study notes.</p>
            <a href={downloadUrl} className={styles.downloadBtn} download target="_blank" rel="noopener noreferrer">
              Download SAP Developer & DevOps Study Notes
            </a>
            <p className={styles.note}>
              Save this link for future downloads: <code>{downloadUrl}</code>
            </p>
            <Link href="/" className={styles.backLink}>← Back to Home</Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className={styles.registerPage}>
        <div className={styles.card}>
          <h1>Download Study Notes</h1>
          <p className={styles.desc}>
            Register to download <strong>SAP Developer & DevOps Study Notes</strong> (SAP_Developer_DevOps_Study_Notes.docx).
          </p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="name">Name *</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="company">Company (optional)</label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Your company"
              />
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" disabled={loading} className={styles.submitBtn}>
              {loading ? 'Registering...' : 'Register & Get Download Link'}
            </button>
          </form>
          <Link href="/" className={styles.backLink}>← Back to Home</Link>
        </div>
      </main>
    </>
  );
}
