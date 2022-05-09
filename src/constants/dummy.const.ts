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
      name: 'Hi-Tea Đào',
      urlImages: [
        require('../assets/imgs/hi-tea-slide1.png'),
        require('../assets/imgs/hi-tea-slide2.png'),
        require('../assets/imgs/hi-tea-slide3.png'),
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
      name: 'Hi-Tea Yuzu',
      urlImages: [
        require('../assets/imgs/hi-tea-slide4.png'),
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
