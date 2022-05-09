import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Button, Carousel } from 'antd';
import clsx from 'clsx';
import { CarouselRef } from 'antd/lib/carousel';

import { BasicTemplateLayout, CustomContainer } from '@components/layouts';
import { productIdKey } from 'src/constants/route.const';
import { productDataResponse, ProductDataResponseType } from 'src/constants/dummy.const';
import { formatPrice } from 'src/utils/helpers';
import { OptionSelect } from '@components/core';
import { CarShipIcon } from '@components/icons';
import styles from './product-detail-container.module.scss';
import { ModalConfirm } from '@components/feature';

export type DataConfirmType = {
  name: string;
  price: number;
  size: string;
  topping: ItemSizeType;
  urlImage: string;
};

type ItemSizeType = {
  name: string;
  addingPrice: number;
};

type ToppingsType = ItemSizeType;

const ProductDetailContainer = () => {
  const [size, setSize] = useState<ItemSizeType>({} as ItemSizeType);
  const [topping, setTopping] = useState<ToppingsType>({} as ToppingsType);
  const [imageSlide, setImageSlide] = useState<string>('');
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [dataConfirm, setDataConfirm] = useState<DataConfirmType>({} as DataConfirmType);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const carouselRef = useRef<CarouselRef>(null);

  const { query } = useRouter();
  const productId = query[productIdKey] as string;

  const res = productDataResponse.find((item) => item.id === productId) as ProductDataResponseType;

  const salePrice = useMemo(() => {
    if (!res) return '';
    const discount = Number(res.data?.discount?.replace('%', '') ?? 0) / 100;
    return formatPrice(totalPrice * (1 - discount));
  }, [res, totalPrice]);

  useEffect(() => {
    if (res) {
      setSize({
        name: res.data.itemSize[0].name,
        addingPrice: res.data.itemSize[0]?.addingPrice ?? 0,
      });
      setImageSlide(res.data.urlImages[0]);
    }
  }, [res]);

  useEffect(() => {
    let pos = 0;
    if (res) {
      pos = res.data.urlImages.indexOf(imageSlide);
    }
    if (carouselRef.current) {
      carouselRef.current.goTo(pos);
    }
  }, [imageSlide, res]);

  useEffect(() => {
    if (res) {
      const { price } = res.data;
      const calcPrice = price + size.addingPrice + (topping?.addingPrice ?? 0);
      setTotalPrice(calcPrice);
    }
  }, [res, size.addingPrice, topping.addingPrice]);

  const renderImageSlider = (size: 'small' | 'large') => {
    const { urlImages } = res.data;

    if (size === 'small') {
      return urlImages.map((url) => (
        <div className="max-w-[80px]" key={JSON.stringify(url)}>
          <Image
            src={url}
            className={clsx(
              'rounded-md cursor-pointer',
              imageSlide === url && styles.selectedImage,
            )}
            onClick={() => setImageSlide(url)}
          />
        </div>
      ));
    }

    return urlImages.map((url) => (
      <div className="max-w-[570px]" key={JSON.stringify(url)}>
        <Image src={url} />
      </div>
    ));
  };

  const handleOpenPopup = () => {
    if (res) {
      const discount = Number(res.data?.discount?.replace('%', '') ?? 0) / 100;

      setOpenPopup(true);
      setDataConfirm({
        name: res.data.name,
        price: totalPrice * (1 - discount),
        size: size.addingPrice ? `${size.name} +${formatPrice(size.addingPrice)}đ` : size.name,
        topping,
        urlImage: res.data.urlImages[0],
      });
    }
  };

  return (
    <BasicTemplateLayout>
      <CustomContainer>
        {res && (
          <div className="mt-10 flex">
            <div className="mr-5 flex flex-col max-w-[50%]">
              <Carousel ref={carouselRef} dots={false}>
                {renderImageSlider('large')}
              </Carousel>
              <div className="flex gap-3 mt-3">{renderImageSlider('small')}</div>
            </div>
            <div>
              <p className="text-[18px] font-bold">{res.data.name}</p>
              <div className="flex items-end my-2">
                <span className="text-[#E57905] text-[28px] font-bold">{salePrice} đ</span>
                <span className="line-through px-5 pb-2">{formatPrice(res.data.price)} đ</span>
                <div className="inline-block px-2 py-1 mb-2 border border-[#E57905] text-[#E57905] bg-[#FFF7E6] rounded-lg">
                  <span className="text-14">{res.data.discount} giảm</span>
                </div>
              </div>
              <p className="text-[16px] pb-2">Kích thước</p>
              <div className="flex flex-wrap gap-x-2 gap-y-5">
                {res.data.itemSize.map(({ name, addingPrice }, index) => {
                  let content: string = name;
                  if (addingPrice) {
                    content += ` + ${formatPrice(addingPrice)}đ`;
                  }
                  return (
                    <OptionSelect
                      key={index}
                      isActive={size.name === name}
                      onClick={() => setSize({ name, addingPrice: addingPrice ?? 0 })}>
                      {content}
                    </OptionSelect>
                  );
                })}
              </div>
              <p className="text-[16px] pb-2 pt-6">Topping</p>
              <div className="flex flex-wrap gap-x-2 gap-y-5">
                {res.data.toppings.map(({ name, addingPrice }, index) => {
                  let content: string = name;
                  if (addingPrice) {
                    content += ` + ${formatPrice(addingPrice)}đ`;
                  }
                  return (
                    <OptionSelect
                      key={index}
                      isActive={topping.name === name}
                      onClick={() => {
                        if (topping.name === name) {
                          setTopping({
                            name: '',
                            addingPrice: 0,
                          });
                        } else {
                          setTopping({
                            name,
                            addingPrice: addingPrice ?? 0,
                          });
                        }
                      }}>
                      {content}
                    </OptionSelect>
                  );
                })}
              </div>
              <Button
                className={clsx('w-[100%] mt-8', styles.buttonShip)}
                onClick={handleOpenPopup}>
                <div className="flex justify-center items-center">
                  <CarShipIcon width={20} height={20} fill="#fff" />
                  <p className="pl-3">Đặt giao tận nơi</p>
                </div>
              </Button>
            </div>
            {openPopup && <ModalConfirm setOpenPopup={setOpenPopup} dataConfirm={dataConfirm} />}
          </div>
        )}
      </CustomContainer>
    </BasicTemplateLayout>
  );
};

export default ProductDetailContainer;
