import React from 'react';

export const logo = require('./imgs/logo.png');
export const hiTeaLogo = require('./imgs/hi-tea-logo.png');

export const slider = {
  image1: require('./imgs/slider1.png'),
  image2: require('./imgs/slider2.png'),
  image3: require('./imgs/slider3.png'),
  image4: require('./imgs/slider4.png'),
};

export const banner = {
  coffee: require('./imgs/banner-coffee-page.png'),
  comingSoon: require('./imgs/coming-soon.png'),
};

export type ListTeaCoffeeType = {
  name: string;
  price: number;
  salePrice?: number;
  urlImage: string;
  path: string;
};
export const listTeaCoffee: ListTeaCoffeeType[] = [
  {
    name: 'Trà sữa ô long kem trứng',
    price: 45000,
    urlImage: require('./imgs/tea-coffee1.png'),
    path: '/products/1',
  },
  {
    name: 'Trà đào cam sả',
    price: 45000,
    urlImage: require('./imgs/tea-coffee2.png'),
    path: '/products/2',
  },
  {
    name: 'Bạc xỉu',
    price: 58000,
    urlImage: require('./imgs/tea-coffee3.png'),
    path: '/products/2',
  },
  {
    name: 'Matcha chanh đá',
    price: 29000,
    urlImage: require('./imgs/tea-coffee4.png'),
    path: '/products/2',
  },
  {
    name: 'Sữa tươi trân châu đường đen',
    price: 29000,
    urlImage: require('./imgs/tea-coffee5.png'),
    path: '/products/2',
  },
  {
    name: 'Croissant',
    price: 29000,
    urlImage: require('./imgs/vn-bread.png'),
    path: '/products/2',
  },
];

export const listPacketCoffee: ListTeaCoffeeType[] = [
  {
    name: 'Cà Phê Rang Xay Original 1 250gr',
    salePrice: 49000,
    price: 59000,
    urlImage: require('./imgs/packet-coffee1.png'),
    path: '/products/2',
  },
  {
    name: 'Cà Phê Hòa Tan Đậm Vị Việt Túi 40x16G',
    price: 98000,
    urlImage: require('./imgs/packet-coffee2.png'),
    path: '/products/2',
  },
  {
    name: 'Cà Phê Sữa Đá Hòa Tan Hộp 10 gói',
    price: 100000,
    salePrice: 39000,
    urlImage: require('./imgs/packet-coffee3.png'),
    path: '/products/2',
  },
  {
    name: 'Cà Phê Sữa Đá Hòa Tan Đậm Vị Hộp 18 gói x 16gr',
    price: 48000,
    salePrice: 39000,
    urlImage: require('./imgs/packet-coffee4.png'),
    path: '/products/2',
  },
  {
    name: 'Cà Phê Rich Finish Gu Đậm Tinh Tế 350gr',
    price: 89000,
    salePrice: 49000,
    urlImage: require('./imgs/packet-coffee5.png'),
    path: '/products/2',
  },
  {
    name: 'Cà Phê Peak Flavor Hương Thơm Đỉnh Cao 350gr',
    price: 89000,
    salePrice: 49000,
    urlImage: require('./imgs/packet-coffee6.png'),
    path: '/products/2',
  },
  {
    name: 'Cà Phê Peak Flavor Hương Thơm Đỉnh Cao 350gr',
    price: 89000,
    salePrice: 49000,
    urlImage: require('./imgs/packet-coffee7.png'),
    path: '/products/2',
  },
  {
    name: 'Cà Phê Arabica',
    price: 98000,
    urlImage: require('./imgs/packet-coffee8.png'),
    path: '/products/2',
  },
  {
    name: 'Cà phê sữa đá pack 6 lon',
    price: 83000,
    salePrice: 69000,
    urlImage: require('./imgs/packet-coffee9.png'),
    path: '/products/2',
  },
  {
    name: 'Thùng 24 Lon Cà Phê Sữa Đá',
    price: 330000,
    salePrice: 269000,
    urlImage: require('./imgs/packet-coffee10.png'),
    path: '/products/2',
  },
  {
    name: 'Cà Phê Sữa Đá Hòa Tan Túi 25 x 22gr',
    price: 98000,
    salePrice: 79000,
    urlImage: require('./imgs/packet-coffee11.png'),
    path: '/products/2',
  },
];

export type ListHiTeaCoffeeType = {
  name: string;
  description: string | React.ReactNode;
  urlImage: string;
  path: string;
};
export const listHiTeaCoffee: ListHiTeaCoffeeType[] = [
  {
    name: 'Cà phê cốt dừa',
    urlImage: require('./imgs/hi-tea1.png'),
    description: (
      <span>
        Cà phê cốt dừa hay còn gọi là cafe sữa dừa là thức uống có hương vị độc đáo. Thức uống này
        có hương béo ngậy của dừa, vị ngọt của sữa pha vị đậm đà của cafe.
      </span>
    ),
    path: '/products/1',
  },
  {
    name: 'Lá nếp cốt dừa',
    urlImage: require('./imgs/hi-tea2.png'),
    description: (
      <span>
        Lá nếp hay còn gọi là cây cơm nếp được biết đến là gia vị làm tăng thêm hương vị thơm ngon
        cho các món ăn. Ngoài ra, nó còn được làm thành nước cốt lá dứa để uống có hiệu quả tốt đối
        với sức khỏe của chúng ta.
      </span>
    ),
    path: '/products/1',
  },
  {
    name: 'Cookies đá xay',
    urlImage: require('./imgs/hi-tea3.png'),
    description: (
      <span>
        Cookie đá xay là sự kết hợp hương vị hoàn hảo của những chiếc bánh cookie truyền thống với
        đá xay mát lạnh. Thêm vào đó là lớp kem phủ trắng mịn, béo ngậy bên trên.
      </span>
    ),
    path: '/products/1',
  },
  {
    name: 'Trà chanh leo ổi hồng',
    urlImage: require('./imgs/hi-tea4.png'),
    description: (
      <span>
        Trà ổi hồng nguyên bản có vị chua ngọt, thơm mùi hoa nhài, nồng nàn vị ổi hồng. Thực hiện
        theo các bước sau bạn sẽ có một ly trà màu hồng mát lạnh và ngon tuyệt.
      </span>
    ),
    path: '/products/1',
  },
  {
    name: 'Matcha đá xay',
    urlImage: require('./imgs/hi-tea5.png'),
    description: (
      <span>
        Matcha đá xay mát lạnh, thơm béo hòa quyện cùng vị ngọt đắng đặc trưng từ bột matcha đem đến
        cho bạn một món thức uống thơm ngon khó cưỡng.
      </span>
    ),
    path: '/products/1',
  },
];

export const listVNCoffee: ListTeaCoffeeType[] = [
  {
    name: 'Cafe Đen',
    price: 38000,
    urlImage: require('./imgs/fe-vn1.png'),
    path: '/products/3',
  },
  {
    name: 'Cafe Nâu',
    price: 38000,
    urlImage: require('./imgs/fe-vn2.png'),
    path: '/products/3',
  },
  {
    name: 'Bạc Sỉu',
    price: 48000,
    urlImage: require('./imgs/fe-vn3.png'),
    path: '/products/3',
  },
];

export const listColdBrewCoffee: ListTeaCoffeeType[] = [
  {
    name: 'Cold Brew Hawai',
    price: 45000,
    salePrice: 37000,
    urlImage: require('./imgs/cold-brew1.png'),
    path: '/products/1',
  },
  {
    name: 'Cold Brew Balo',
    price: 49000,
    salePrice: 39000,
    urlImage: require('./imgs/cold-brew2.png'),
    path: '/products/2',
  },
];

export const listMachineCoffee: ListTeaCoffeeType[] = [
  {
    name: 'Amaretto',
    price: 68000,
    urlImage: require('./imgs/cafe-may1.png'),
    path: '/products/4',
  },
  {
    name: 'Mocaccino',
    price: 68000,
    urlImage: require('./imgs/cafe-may2.png'),
    path: '/products/4',
  },
  {
    name: 'Alpenlibe',
    price: 69000,
    urlImage: require('./imgs/cafe-may3.png'),
    path: '/products/4',
  },
  {
    name: 'Americano',
    price: 48000,
    urlImage: require('./imgs/cafe-may4.png'),
    path: '/products/4',
  },
  {
    name: 'Almond Milk Caffe Latte',
    price: 68000,
    urlImage: require('./imgs/cafe-may5.png'),
    path: '/products/4',
  },
  {
    name: 'Almond Milk Tea macchiato',
    price: 68000,
    urlImage: require('./imgs/cafe-may6.png'),
    path: '/products/4',
  },
];
