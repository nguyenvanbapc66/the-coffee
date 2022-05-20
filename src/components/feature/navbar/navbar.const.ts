import {
  atHomeMenuKey,
  coffeeAtHomeMenuKey,
  coffeeMenuKey,
  coldBrewCoffeeMenuKey,
  giftCollectionsMenuKey,
  machineCoffeeMenuKey,
  menuKey,
  storeMenuKey,
  vnCoffeeMenuKey,
} from '../../../constants/route.const';

export type NavbarType = {
  id: string;
  name: string;
  path: string;
  children?: NavbarType[];
  grandChild?: NavbarType[];
};

export const navbarConfig: NavbarType[] = [
  {
    id: `${coffeeAtHomeMenuKey}`,
    name: 'Cà phê',
    path: `/collections/${coffeeAtHomeMenuKey}`,
  },
  {
    id: `${menuKey}`,
    name: 'Menu',
    path: `/collections/${menuKey}`,
    children: [
      {
        id: `${menuKey}`,
        name: 'Tất cả',
        path: `/collections/${menuKey}?key=${menuKey}`,
      },
      {
        id: `${coffeeMenuKey}`,
        name: 'Cà Phê',
        path: `/collections/${coffeeMenuKey}?key=${coffeeMenuKey}`,
        grandChild: [
          {
            id: `${vnCoffeeMenuKey}`,
            name: 'Cà Phê Việt Nam',
            path: `/collections/${vnCoffeeMenuKey}?isChild=true&key=${coffeeMenuKey}`,
          },
          {
            id: `${machineCoffeeMenuKey}`,
            name: 'Cà Phê Máy',
            path: `/collections/${machineCoffeeMenuKey}?isChild=true&key=${coffeeMenuKey}`,
          },
          {
            id: `${coldBrewCoffeeMenuKey}`,
            name: 'Cold Brew',
            path: `/collections/${coldBrewCoffeeMenuKey}?isChild=true&key=${coffeeMenuKey}`,
          },
        ],
      },
      {
        id: `${atHomeMenuKey}`,
        name: 'Tại nhà',
        path: `/collections/${atHomeMenuKey}?key=${atHomeMenuKey}`,
        grandChild: [
          {
            id: `${coffeeAtHomeMenuKey}`,
            name: 'Cà phê tại nhà',
            path: `/collections/${coffeeAtHomeMenuKey}?key=${coffeeAtHomeMenuKey}`,
          },
          {
            id: `${giftCollectionsMenuKey}`,
            name: 'Bộ sưu tập quà tặng',
            path: `/collections/${giftCollectionsMenuKey}?key=${giftCollectionsMenuKey}`,
          },
        ],
      },
    ],
  },
  {
    id: `${storeMenuKey}`,
    name: 'Cửa hàng',
    path: `/pages/${storeMenuKey}`,
  },
];
