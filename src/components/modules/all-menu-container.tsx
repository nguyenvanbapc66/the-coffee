import Image from 'next/image';

import { MenuItemCategory } from '@components/core';
import { SideBar } from '@components/feature';
import { BasicTemplateLayout } from '@components/layouts';
import { listPacketCoffee, listTeaCoffee, slider } from 'src/assets/images';
import styles from '../modules/all-menu-container.module.scss';

const AllMenuContainer = () => {
  const renderListPacketCoffee = () => {
    return Object.values(listPacketCoffee).map((data) => (
      <MenuItemCategory data={data} size="large" />
    ));
  };

  const renderListTeaCoffee = () => {
    return Object.values(listTeaCoffee).map((data) => (
      <MenuItemCategory data={data} size="large" />
    ));
  };

  return (
    <BasicTemplateLayout>
      <SideBar>
        <div>
          <Image src={slider.image3} />
        </div>
        <div>
          <p className="text-[24px] font-bold py-5">Cà phê tại nhà</p>
          <div className={styles.menuList}>{renderListPacketCoffee()}</div>
        </div>
        <div>
          <p className="text-[24px] font-bold pb-5 pt-[50px]">Hi-Tea</p>
          <div className={styles.menuList}>{renderListTeaCoffee()}</div>
        </div>
      </SideBar>
    </BasicTemplateLayout>
  );
};

export default AllMenuContainer;
