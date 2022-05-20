import { Button, RowProps } from 'antd';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { ListHiTeaCoffeeType } from 'src/assets/images';
import styles from './menu-item-card.module.scss';

interface MenuItemCardProps extends RowProps {
  data: ListHiTeaCoffeeType;
}

const MenuItemCard = ({ data, ...props }: MenuItemCardProps) => {
  const router = useRouter();

  const handleRedirectToPath = () => {
    router.push(data.path);
  };

  return (
    <div {...props} className={clsx(styles.menuCardItem, 'flex flex-col', props.className)}>
      <div>
        <Image src={data.urlImage} className="rounded-md" />
      </div>
      <p className="text-18 font-semibold mb-[6px]">{data.name}</p>
      <p>{data.description}</p>
      <Button className={styles.buttonDetail} onClick={handleRedirectToPath}>
        Tìm hiểu thêm
      </Button>
    </div>
  );
};

export default MenuItemCard;
