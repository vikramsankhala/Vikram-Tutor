import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
