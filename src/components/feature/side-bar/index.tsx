import React from 'react';
import { useRouter } from 'next/router';

import { CustomContainer } from '@components/layouts';
import { sideBarConfig } from './side-bar.const';
import styles from './side-bar.module.scss';
import { CaretRightIcon } from '@components/icons';
import clsx from 'clsx';
import { isChild } from 'src/constants/route';

interface SideBarProps {
  children: React.ReactNode;
}

const SideBar = ({ children }: SideBarProps) => {
  const { pathname, push, query } = useRouter();
  const isChildren = query[isChild] as string;

  const handleClickRedirect = (path: string, isChild?: boolean) => {
    if (isChild) {
      push({
        pathname: path,
        query: {
          isChild,
        },
      });
    } else {
      push(path);
    }
  };

  return (
    <CustomContainer className="flex mt-6">
      <section className="border-r-2 mr-[72px] pr-[52px]">
        <div className="min-w-[170px] min-h-[270px] sticky top-[74px]">
          {sideBarConfig.map(({ title, path, key, children }) => (
            <div className={styles.title} key={key}>
              <p
                className="py-2 flex items-center cursor-pointer select-none hover:opacity-70"
                onClick={() => handleClickRedirect(path)}>
                {pathname.includes(key) && (
                  <CaretRightIcon width={12} height={12} fill={!isChildren ? '#ea8025' : '#000'} />
                )}
                {pathname.includes(key) ? (
                  <span
                    className={clsx(
                      'pl-1 text-[16px]',
                      !isChildren ? 'text-[#ea8025]' : 'text-[#000] ',
                    )}>
                    {title}
                  </span>
                ) : (
                  <span>{title}</span>
                )}
              </p>
              {children && (
                <ul className="list-disc pl-7">
                  {children.map(({ title, path, key }) => (
                    <li
                      key={key}
                      className={clsx(
                        'py-2 cursor-pointer select-none hover:opacity-70',
                        pathname.includes(key) && 'text-[#ea8025]',
                      )}
                      onClick={() => handleClickRedirect(path, true)}>
                      {title}
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
