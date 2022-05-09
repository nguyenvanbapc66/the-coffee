import { RowProps } from 'antd';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { ListTeaCoffeeType } from 'src/assets/images';
import { formatPrice } from './menu-item-catefory.const';

import styles from './menu-item-category.module.scss';

interface MenuItemCategoryProps extends RowProps {
  data: ListTeaCoffeeType;
  size?: 'large' | 'small';
}

const MenuItemCategory = ({ data, size, ...props }: MenuItemCategoryProps) => {
  return (
    <div {...props} className={clsx('cursor-pointer max-w-[270px]', props.className)}>
      <Link href={data.path}>
        <a className="hover:text-[#ea8025]">
          <div
            className={clsx(styles.menuItem, size === 'large' ? 'md:w-[270px] sm:w-[170px]' : '')}>
            <Image src={data.urlImage} className="rounded-2xl" />
          </div>
          <p className="font-semibold pt-3">{data.name}</p>
        </a>
      </Link>
      {data.salePrice && (
        <p className="text-[#ea8025] text-18 font-semibold">{formatPrice(data.salePrice)} đ</p>
      )}
      <p
        className={`font-medium pt-1 ${data.salePrice && 'line-through'}`}
        style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
        {formatPrice(data.price)} đ
      </p>
    </div>
  );
};

export default MenuItemCategory;
