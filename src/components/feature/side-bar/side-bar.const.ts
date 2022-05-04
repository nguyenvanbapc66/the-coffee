import {
  atHomeMenuKey,
  coffeeMenuKey,
  coldBrewCoffeeMenuKey,
  machineCoffeeMenuKey,
  menuKey,
  vnCoffeeMenuKey,
} from 'src/constants/route';

type SideBarConfigType = {
  title: string;
  path: string;
  key: string;
  children?: SideBarConfigType[];
};

export const sideBarConfig: SideBarConfigType[] = [
  {
    title: 'Tất cả',
    path: `/collections/${menuKey}`,
    key: `${menuKey}`,
  },
  {
    title: 'Cà Phê',
    path: `/collections/${coffeeMenuKey}`,
    key: `${coffeeMenuKey}`,
    children: [
      {
        title: 'Cà Phê Việt Nam',
        path: `/collections/${vnCoffeeMenuKey}`,
        key: `${vnCoffeeMenuKey}`,
      },
      {
        title: 'Cà Phê Máy',
        path: `/collections/${machineCoffeeMenuKey}`,
        key: `${machineCoffeeMenuKey}`,
      },
      {
        title: 'Cold Brew',
        path: `/collections/${coldBrewCoffeeMenuKey}`,
        key: `${coldBrewCoffeeMenuKey}`,
      },
    ],
  },
  {
    title: 'Tại nhà',
    path: `/collections/${atHomeMenuKey}`,
    key: `${atHomeMenuKey}`,
  },
];
