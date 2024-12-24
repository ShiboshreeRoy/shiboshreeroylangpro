import React from 'react';
import { RevealOnScroll } from '../lib/shiboshreeroylang';

interface DemoSectionProps {
  title: string;
  children: React.ReactNode;
}

export const DemoSection: React.FC<DemoSectionProps> = ({ title, children }) => {
  return (
    <RevealOnScroll>
      <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>
        {children}
      </div>
    </RevealOnScroll>
  );
};