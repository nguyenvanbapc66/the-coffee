import { RowProps } from 'antd';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { ListTeaCoffeeType } from 'src/assets/images';

import styles from './menu-item-category.module.scss';

interface MenuItemCategoryProps extends RowProps {
  data: ListTeaCoffeeType;
}

const MenuItemCategory = ({ data, ...props }: MenuItemCategoryProps) => {
  return (
    <div {...props} className={clsx('cursor-pointer', props.className)}>
      <Link href={'/'}>
        <a className="hover:text-[#ea8025]">
          <div className={styles.menuItem}>
            <Image src={data.urlImage} className="rounded-2xl" />
          </div>
          <p className="font-semibold pt-3">{data.name}</p>
        </a>
      </Link>
      <p className="font-medium pt-1" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
        {data.price} đ
      </p>
    </div>
  );
};

export default MenuItemCategory;
