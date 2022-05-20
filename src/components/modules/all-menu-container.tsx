import Image from 'next/image';

import { MenuItemCategory } from '@components/core';
import { SideBar } from '@components/feature';
import { BasicTemplateLayout } from '@components/layouts';
import {
  listColdBrewCoffee,
  listMachineCoffee,
  listPacketCoffee,
  listTeaCoffee,
  listVNCoffee,
  slider,
} from 'src/assets/images';
import styles from '../modules/all-menu-container.module.scss';

const AllMenuContainer = () => {
  const renderListPacketCoffee = () => {
    return Object.values(listPacketCoffee).map((data, index) => (
      <MenuItemCategory key={index} data={data} size="large" />
    ));
  };

  const renderListTeaCoffee = () => {
    return Object.values(listTeaCoffee).map((data, index) => (
      <MenuItemCategory key={index} data={data} size="large" />
    ));
  };

  const renderListVNCoffee = () => {
    return Object.values(listVNCoffee).map((data) => <MenuItemCategory data={data} size="large" />);
  };

  const renderListMachineoffee = () => {
    return Object.values(listMachineCoffee).map((data) => (
      <MenuItemCategory data={data} size="large" />
    ));
  };

  const renderListColdBrewCoffee = () => {
    return Object.values(listColdBrewCoffee).map((data) => (
      <MenuItemCategory data={data} size="large" />
    ));
  };

  return (
    <BasicTemplateLayout>
      <SideBar>
        <div>
          <Image src={slider.image1} />
        </div>
        <div>
          <p className="text-[24px] font-bold py-5">Cà phê tại nhà</p>
          <div className={styles.menuList}>{renderListPacketCoffee()}</div>
        </div>
        <div>
          <p className="text-[24px] font-bold pb-5 pt-[50px]">Hi-Tea</p>
          <div className={styles.menuList}>{renderListTeaCoffee()}</div>
        </div>
        <div>
          <p className="text-[24px] font-bold pb-5 pt-[50px]">Cà phê Việt Nam</p>
          <div className={styles.menuList}>{renderListVNCoffee()}</div>
        </div>
        <div>
          <p className="text-[24px] font-bold pb-5 pt-[50px]">Cà phê máy</p>
          <div className={styles.menuList}>{renderListMachineoffee()}</div>
        </div>
        <div>
          <p className="text-[24px] font-bold pb-5 pt-[50px]">Cold Brew</p>
          <div className={styles.menuList}>{renderListColdBrewCoffee()}</div>
        </div>
      </SideBar>
    </BasicTemplateLayout>
  );
};

export default AllMenuContainer;
