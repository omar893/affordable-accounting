import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Affordable Accounting Solutions',
  description: 'Professional accounting services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-800`}>
        {children}
        <footer className="bg-gray-800 text-white py-6 text-center">
          <div className="max-w-6xl mx-auto px-4">
            <p>© {new Date().getFullYear()} Affordable Accounting Solutions</p>
          </div>
        </footer>
      </body>
    </html>
  );
}