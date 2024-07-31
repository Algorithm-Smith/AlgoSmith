import { UserProvider } from '@auth0/nextjs-auth0/client';
import Navbar from './components/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AlgoSmith',
  description: 'Because sharing is caring',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <Navbar />
          <main className={inter.className}>{children} </main>
        </body>
      </UserProvider>
    </html>
  );
}
