import Image from 'next/image';

import { MenuItemCategory } from '@components/core';
import { SideBar } from '@components/feature';
import { BasicTemplateLayout } from '@components/layouts';
import { listPacketCoffee, slider } from 'src/assets/images';
import styles from '../modules/all-menu-container.module.scss';

const HomeCoffeeContainer = () => {
  const renderListPacketCoffee = () => {
    return Object.values(listPacketCoffee).map((data, index) => (
      <MenuItemCategory key={index} data={data} size="large" />
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
      </SideBar>
    </BasicTemplateLayout>
  );
};

export default HomeCoffeeContainer;
