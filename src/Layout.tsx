import React from 'react';
import { Header } from '../components/blocks/Header';
import { Footer } from '../components/blocks/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background-500 font-display">
      <Header />
      <main className="flex-1 container mx-auto px-6 lg:px-16 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};