import Image from 'next/image';

import { MenuItemCategory } from '@components/core';
import { CustomContainer } from '@components/layouts';
import BasicTemplateLayout from '@components/layouts/basic-template';
import { banner, listPacketCoffee } from 'src/assets/images';
import styles from './coffee-page-container.module.scss';

const CoffeePageContainer = () => {
  const renderListPacketCoffee = () => {
    return Object.values(listPacketCoffee).map((data) => <MenuItemCategory data={data} />);
  };

  return (
    <BasicTemplateLayout>
      <header>
        <Image src={banner.coffee} />
      </header>
      <CustomContainer className="mt-9">
        <p className="font-bold text-[22px] mb-5">Cà Phê Tại Nhà</p>
        <div className={styles.menuList}>{renderListPacketCoffee()}</div>
      </CustomContainer>
    </BasicTemplateLayout>
  );
};

export default CoffeePageContainer;
