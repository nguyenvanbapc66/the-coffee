export type ItemSizeType = {
  name: string;
  addingPrice?: number;
};

export type ToppingsType = ItemSizeType;

export type DataType = {
  name: string;
  urlImages: string[];
  price: number;
  discount?: string;
  itemSize: ItemSizeType[];
  toppings: ToppingsType[];
};

export type ProductDataResponseType = {
  id: string;
  data: DataType;
};

export const productDataResponse: ProductDataResponseType[] = [
  {
    id: '1',
    data: {
      name: 'Cà phê cốt dừa',
      urlImages: [
        require('../assets/imgs/hi-tea1.png'),
        require('../assets/imgs/detail1.png'),
        require('../assets/imgs/detail2.png'),
      ],
      price: 45000,
      discount: '35%',
      itemSize: [
        { name: 'Nhỏ' },
        { name: 'Vừa', addingPrice: 6000 },
        { name: 'Lớn', addingPrice: 13000 },
      ],
      toppings: [
        { name: 'Shot Espresso', addingPrice: 10000 },
        { name: 'Kem phô mai Macchiato', addingPrice: 10000 },
        { name: 'Sốt Caramel', addingPrice: 10000 },
        { name: 'Hạt sen', addingPrice: 10000 },
        { name: 'Trân châu trắng', addingPrice: 10000 },
        { name: 'Đào miếng', addingPrice: 10000 },
        { name: 'Trái vải', addingPrice: 10000 },
      ],
    },
  },
  {
    id: '2',
    data: {
      name: 'Cà Phê Rang Xay Original 1 250gr',
      urlImages: [
        require('../assets/imgs/packet-coffee1.png'),
        require('../assets/imgs/hi-tea-slide5.png'),
        require('../assets/imgs/hi-tea-slide6.png'),
        require('../assets/imgs/hi-tea-slide6.png'),
      ],
      price: 45000,
      discount: '20%',
      itemSize: [
        { name: 'Nhỏ', addingPrice: 100000 },
        { name: 'Vừa', addingPrice: 6000 },
        { name: 'Lớn', addingPrice: 13000 },
      ],
      toppings: [
        { name: 'Shot Espresso', addingPrice: 10000 },
        { name: 'Kem phô mai Macchiato', addingPrice: 10000 },
        { name: 'Sốt Caramel', addingPrice: 10000 },
        { name: 'Hạt sen', addingPrice: 10000 },
        { name: 'Trân châu trắng', addingPrice: 10000 },
        { name: 'Đào miếng', addingPrice: 10000 },
        { name: 'Trái vải', addingPrice: 10000 },
      ],
    },
  },
  {
    id: '3',
    data: {
      name: 'Cafe Đen',
      urlImages: [
        require('../assets/imgs/fe-vn1.png'),
        require('../assets/imgs/hi-tea-slide5.png'),
        require('../assets/imgs/hi-tea-slide6.png'),
      ],
      price: 45000,
      discount: '35%',
      itemSize: [
        { name: 'Nhỏ' },
        { name: 'Vừa', addingPrice: 6000 },
        { name: 'Lớn', addingPrice: 13000 },
      ],
      toppings: [
        { name: 'Shot Espresso', addingPrice: 10000 },
        { name: 'Kem phô mai Macchiato', addingPrice: 10000 },
        { name: 'Sốt Caramel', addingPrice: 10000 },
        { name: 'Hạt sen', addingPrice: 10000 },
        { name: 'Trân châu trắng', addingPrice: 10000 },
        { name: 'Đào miếng', addingPrice: 10000 },
        { name: 'Trái vải', addingPrice: 10000 },
      ],
    },
  },
  {
    id: '4',
    data: {
      name: 'Amaretto',
      urlImages: [
        require('../assets/imgs/cafe-may1.png'),
        require('../assets/imgs/hi-tea-slide5.png'),
        require('../assets/imgs/hi-tea-slide6.png'),
      ],
      price: 45000,
      discount: '35%',
      itemSize: [
        { name: 'Nhỏ' },
        { name: 'Vừa', addingPrice: 6000 },
        { name: 'Lớn', addingPrice: 13000 },
      ],
      toppings: [
        { name: 'Shot Espresso', addingPrice: 10000 },
        { name: 'Kem phô mai Macchiato', addingPrice: 10000 },
        { name: 'Sốt Caramel', addingPrice: 10000 },
        { name: 'Hạt sen', addingPrice: 10000 },
        { name: 'Trân châu trắng', addingPrice: 10000 },
        { name: 'Đào miếng', addingPrice: 10000 },
        { name: 'Trái vải', addingPrice: 10000 },
      ],
    },
  },
];
