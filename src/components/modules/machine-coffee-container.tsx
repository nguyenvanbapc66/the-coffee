import Image from 'next/image';

import { MenuItemCategory } from '@components/core';
import { SideBar } from '@components/feature';
import { BasicTemplateLayout } from '@components/layouts';
import { listMachineCoffee, slider } from 'src/assets/images';
import styles from './all-menu-container.module.scss';

const MachineCoffeeContainer = () => {
  const renderListPacketCoffee = () => {
    return Object.values(listMachineCoffee).map((data) => (
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
          <p className="text-[24px] font-bold py-5">Cà phê máy</p>
          <div className={styles.menuList}>{renderListPacketCoffee()}</div>
        </div>
      </SideBar>
    </BasicTemplateLayout>
  );
};

export default MachineCoffeeContainer;
