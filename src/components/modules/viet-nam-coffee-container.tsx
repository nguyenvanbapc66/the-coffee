import Image from 'next/image';

import { MenuItemCategory } from '@components/core';
import { SideBar } from '@components/feature';
import { BasicTemplateLayout } from '@components/layouts';
import { listVNCoffee, slider } from 'src/assets/images';
import styles from './all-menu-container.module.scss';

const VietNamCoffeeContainer = () => {
  const renderListPacketCoffee = () => {
    return Object.values(listVNCoffee).map((data) => (
      <MenuItemCategory data={data} size="large" resizeImage={styles.resizeCoffeeImage} />
    ));
  };

  return (
    <BasicTemplateLayout>
      <SideBar>
        <div>
          <Image src={slider.image1} />
        </div>
        <div>
          <p className="text-[24px] font-bold py-5">Cà phê Việt Nam</p>
          <div className={styles.menuList}>{renderListPacketCoffee()}</div>
        </div>
      </SideBar>
    </BasicTemplateLayout>
  );
};

export default VietNamCoffeeContainer;
