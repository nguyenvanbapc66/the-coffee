import React from 'react';
import { useRouter } from 'next/router';

import { CustomContainer } from '@components/layouts';
import { sideBarConfig } from './side-bar.const';
import styles from './side-bar.module.scss';
import { CaretRightIcon } from '@components/icons';
import clsx from 'clsx';
import { isChild, key } from 'src/constants/route.const';

interface SideBarProps {
  children: React.ReactNode;
}

const SideBar = ({ children }: SideBarProps) => {
  const { pathname, push, query } = useRouter();
  const isChildren = query[isChild] as string;
  const keyQuery = query[key] as string;

  const handleClickRedirect = (path: string, key: string, isChild?: boolean) => {
    const query = isChild ? { isChild, key } : { key };
    push({ pathname: path, query });
  };

  return (
    <CustomContainer className="flex mt-6">
      <section className="border-r-2 mr-[72px] pr-[52px]">
        <div className="min-w-[170px] min-h-[270px] sticky top-[74px]">
          {sideBarConfig.map((item) => (
            <div className={styles.title} key={item.key}>
              <p
                className="py-2 flex items-center cursor-pointer select-none hover:opacity-70"
                onClick={() => handleClickRedirect(item.path, item.key)}>
                {item.key.includes(keyQuery) ? (
                  <>
                    <CaretRightIcon
                      width={12}
                      height={12}
                      fill={!isChildren ? '#ea8025' : '#000'}
                    />
                    <span
                      className={clsx(
                        'pl-1 text-[16px]',
                        !isChildren ? 'text-[#ea8025]' : 'text-[#000] ',
                      )}>
                      {item.title}
                    </span>
                  </>
                ) : (
                  <span>{item.title}</span>
                )}
              </p>
              {item.children && (
                <ul className="list-disc pl-7">
                  {item.children.map((itemChild) => (
                    <li
                      key={itemChild.key}
                      className={clsx(
                        'py-2 cursor-pointer select-none hover:opacity-70',
                        pathname.includes(itemChild.key) && 'text-[#ea8025]',
                      )}
                      onClick={() => handleClickRedirect(itemChild.path, item.key, true)}>
                      {itemChild.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
      <div>{children}</div>
    </CustomContainer>
  );
};

export default SideBar;
