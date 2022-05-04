import dynamic from 'next/dynamic';
import React from 'react';

import { LayoutProps } from 'src/types/common.type';

const Navbar = dynamic(() => import('src/components/feature/navbar'), { ssr: false });

const Footer = dynamic(() => import('src/components/feature/footer'), { ssr: false });

const BasicTemplateLayout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default BasicTemplateLayout;
