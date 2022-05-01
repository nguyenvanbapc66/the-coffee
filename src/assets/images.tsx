import React from 'react';

export const logo = require('./imgs/logo.png');
export const hiTeaLogo = require('./imgs/hi-tea-logo.png');

export const slider = {
  image1: require('./imgs/slider1.png'),
  image2: require('./imgs/slider2.png'),
  image3: require('./imgs/slider3.png'),
  image4: require('./imgs/slider4.png'),
};

export type ListTeaCoffeeType = {
  name: string;
  price: number;
  urlImage: string;
};
export const listTeaCoffee: ListTeaCoffeeType[] = [
  { name: 'Hi-Tea Đào', price: 45000, urlImage: require('./imgs/tea-coffee1.png') },
  { name: 'Hi-Tea Yuzu', price: 45000, urlImage: require('./imgs/tea-coffee2.png') },
  { name: 'Hi-Tea Yuzu', price: 58000, urlImage: require('./imgs/tea-coffee3.png') },
  { name: 'Cà Phê Đen Đá', price: 29000, urlImage: require('./imgs/tea-coffee4.png') },
  { name: 'Cà Phê Sữa Đá', price: 29000, urlImage: require('./imgs/tea-coffee5.png') },
  { name: 'Bánh Mì VN Thịt Nguội', price: 29000, urlImage: require('./imgs/vn-bread.png') },
];

export type ListHiTeaCoffeeType = {
  name: string;
  description: string | React.ReactNode;
  urlImage: string;
};
export const listHiTeaCoffee: ListHiTeaCoffeeType[] = [
  {
    name: 'Hi-Tea Đào',
    urlImage: require('./imgs/hi-tea1.png'),
    description: (
      <span>
        Sự kết hợp ăn ý giữa Đào cùng trà 100% hoa Hibiscus tự nhiên, tạo nên tổng thể hài hoà dễ
        gây “thương nhớ” cho team thích món thanh mát, có vị chua nhẹ.
      </span>
    ),
  },
  {
    name: 'Hi-Tea Vải',
    urlImage: require('./imgs/hi-tea2.png'),
    description: (
      <span>
        Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn
        thức uống đúng chuẩn vừa ngon, vừa healthy.
      </span>
    ),
  },
  {
    name: 'Hi-Tea Yuzu',
    urlImage: require('./imgs/hi-tea3.png'),
    description: (
      <span>
        Không chỉ nổi bật với sắc đỏ đặc trưng từ trà hoa Hibiscus, Hi-Tea Yuzu còn gây ấn tượng với
        topping Yuzu (quýt Nhật) lạ miệng, kết hợp cùng trân châu trắng dai giòn sần sật, nhai vui
        vui.
      </span>
    ),
  },
  {
    name: 'Hi-Tea Đá Tuyết Xoài Đào',
    urlImage: require('./imgs/hi-tea4.png'),
    description: (
      <span>
        Những miếng đào vàng ươm kết hợp với đá tuyết vị xoài mát lành, cùng nền trà hoa Hibiscus
        chua dịu đem đến cảm giác lạ miệng, hấp dẫn đến tận ngụm cuối cùng.
      </span>
    ),
  },
  {
    name: 'Hi-Tea Đá Tuyết Yuzu Vải',
    urlImage: require('./imgs/hi-tea5.png'),
    description: (
      <span>
        Vị trà hoa Hibiscus chua chua, kết hợp cùng đá xay Yuzu mát lạnh tái tê thêm miếng vải căng
        mọng, ngọt ngào sẽ khiến bạn thích thú ngay từ lần thử đầu tiên.
      </span>
    ),
  },
];
