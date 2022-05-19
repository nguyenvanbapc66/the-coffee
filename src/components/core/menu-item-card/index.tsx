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
    <div {...props} className={clsx(styles.menuCardItem, 'flex flex-col', props.className)}>
      <div>
        <Image src={data.urlImage} className="rounded-md" />
      </div>
      <p className="text-18 font-semibold mb-[6px]">{data.name}</p>
      <p>{data.description}</p>
      <Button className={styles.buttonDetail}>Tìm hiểu thêm</Button>
    </div>
  );
};

export default MenuItemCard;
