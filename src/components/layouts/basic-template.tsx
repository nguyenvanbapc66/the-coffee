import { FacebookIcon, InstagramIcon, LocationIcon } from '@components/icons';
import { Col, Row } from 'antd';
import dynamic from 'next/dynamic';
import React from 'react';
import { LayoutProps } from 'src/types/common.type';
import CustomContainer from './container';

const Navbar = dynamic(() => import('src/components/feature/navbar'), { ssr: false });

const BasicTemplateLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer className="bg-[#000000D9] text-[#fff]">
        <CustomContainer>
          <Row className="py-10">
            {footerConfig.map(({ title, detailContract }) => (
              <Col span={6}>
                <Row>
                  <Col className="font-semibold mb-4">{title}</Col>
                </Row>
                {detailContract.map(({ name }) => (
                  <Row>
                    <Col className="text-[12px] font-medium mb-4">{name}</Col>
                  </Row>
                ))}
              </Col>
            ))}
          </Row>
        </CustomContainer>
      </footer>
    </div>
  );
};

type FooterConfigType = {
  title?: string | React.ReactNode;
  detailContract: { name: string | React.ReactNode }[];
};

const footerConfig: FooterConfigType[] = [
  {
    title: 'Giới thiệu',
    detailContract: [
      { name: 'Về Chúng Tôi' },
      { name: 'Sản phẩm' },
      { name: 'Khuyến mãi' },
      { name: 'Chuyện cà phê' },
      { name: 'Cửa Hàng' },
      { name: 'Tuyển dụng' },
    ],
  },
  {
    title: 'Điều khoản',
    detailContract: [{ name: 'Điều khoản sử dụng' }, { name: 'Quy tắc bảo mật' }],
  },
  {
    title: (
      <span className="flex">
        <LocationIcon width={24} height={24} fill="#fff" className="mr-3" /> Liên hệ
      </span>
    ),
    detailContract: [
      {
        name: (
          <span className="text-14 max-w-">
            Tầng 3-4 Hub Building <br /> 195/10E Điện Biên Phủ, P.15 , <br /> Q.Bình Thạnh, TP.Hồ
            Chí Minh
          </span>
        ),
      },
    ],
  },
  {
    detailContract: [
      {
        name: (
          <span className="flex">
            <FacebookIcon width={24} height={24} fill="#fff" className="mr-4" />
            <InstagramIcon width={24} height={24} fill="#fff" />
          </span>
        ),
      },
    ],
  },
];

export default BasicTemplateLayout;
