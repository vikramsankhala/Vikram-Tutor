import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'SAP BTP Companion',
  description: 'Comprehensive SAP Business Technology Platform companion - Architecture, services, departments, and learning resources',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ flex: 1 }}>{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
