import { FacebookIcon, InstagramIcon, LocationIcon } from '@components/icons';
import React from 'react';

type FooterConfigType = {
  title?: string | React.ReactNode;
  detailContract: { name: string | React.ReactNode }[];
};

export const footerConfig: FooterConfigType[] = [
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
