import dynamic from 'next/dynamic';
import { LayoutProps } from 'src/types/common.type';

const Navbar = dynamic(() => import('src/components/feature/navbar'), { ssr: false });

const BasicTemplateLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default BasicTemplateLayout;
