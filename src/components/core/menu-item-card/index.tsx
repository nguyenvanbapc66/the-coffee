import { Button, RowProps } from 'antd';
import clsx from 'clsx';
import Image from 'next/image';

import { ListHiTeaCoffeeType } from 'src/assets/images';
import styles from './menu-item-card.module.scss';

interface MenuItemCardProps extends RowProps {
  data: ListHiTeaCoffeeType;
}

const MenuItemCard = ({ data, ...props }: MenuItemCardProps) => {
  return (
    <div
      {...props}
      className={clsx(styles.menuCardItem, 'relative flex flex-col justify-end', props.className)}>
      <div className="absolute top-[-115px]">
        <Image src={data.urlImage} />
      </div>
      <p className="text-18 font-semibold mb-[6px]">{data.name}</p>
      <p>{data.description}</p>
      <Button className={styles.buttonDetail}>Tìm hiểu thêm</Button>
    </div>
  );
};

export default MenuItemCard;
