import { Carousel } from 'antd';
import Image from 'next/image';
import clsx from 'clsx';

import { BasicTemplateLayout, CustomContainer } from '@components/layouts';
import {
  hiTeaLogo,
  listHiTeaCoffee,
  ListHiTeaCoffeeType,
  listTeaCoffee,
  slider,
} from 'src/assets/images';
import { MenuItemCard, MenuItemCategory } from '@components/core';
import styles from './home-container.module.scss';

type NewListHiTeaCoffee = {
  itemsOfFirstRow: ListHiTeaCoffeeType[];
  itemsOfSecondRow: ListHiTeaCoffeeType[];
};

const HomeContainer = () => {
  const renderImageSlider = () => {
    return Object.values(slider).map((urlImage) => (
      <div key={urlImage}>
        <Image src={urlImage} />
      </div>
    ));
  };

  const renderTeaCoffeeImages = () => {
    return listTeaCoffee.map((data, index) => <MenuItemCategory key={index} data={data} />);
  };

  const formatDataHiTeaCoffee = () => {
    const newListHiTeaCoffee: NewListHiTeaCoffee = {
      itemsOfFirstRow: [],
      itemsOfSecondRow: [],
    };

    listHiTeaCoffee.forEach((item, index) => {
      if (index < 3) {
        newListHiTeaCoffee.itemsOfFirstRow.push(item);
      } else {
        newListHiTeaCoffee.itemsOfSecondRow.push(item);
      }
    });
    return newListHiTeaCoffee;
  };

  return (
    <BasicTemplateLayout>
      <Carousel autoplay swipeToSlide draggable>
        {renderImageSlider()}
      </Carousel>
      <CustomContainer className={clsx('my-20', styles.menuList)}>
        {renderTeaCoffeeImages()}
      </CustomContainer>
      <section className="bg-[#FFE9D4] py-16">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-[400px]">
            <Image src={hiTeaLogo} />
          </div>
          <p className="max-w-[764px] font-semibold pt-3">
            Được chiết xuất từ 100% hoa Hibiscus tự nhiên, không chứa caffeine cùng toppings trái
            cây đa dạng, Hi-Tea Healthy là lựa chọn cho những ai muốn chăm sức khoẻ và yêu chiều bản
            thân. Chọn Hi - Tea Healthy là chọn “Say Hi” với một cách sống mới “Heathy và Healing”
            cho chính mình.
          </p>
          <p className="font-semibold text-[18px] pt-4">Thử đi chờ chi!</p>
        </div>
        <CustomContainer>
          <div className={styles.menuFirstCardList}>
            {formatDataHiTeaCoffee().itemsOfFirstRow.map((data, index) => (
              <MenuItemCard key={index} data={data} />
            ))}
          </div>
          <div className={styles.menuSecondCardList}>
            {formatDataHiTeaCoffee().itemsOfSecondRow.map((data, index) => (
              <MenuItemCard key={index} data={data} className="max-w-[370px]" />
            ))}
          </div>
        </CustomContainer>
      </section>
    </BasicTemplateLayout>
  );
};

export default HomeContainer;
