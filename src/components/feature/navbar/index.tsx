import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import { navbarConfig } from './navbar.const';
import { logo } from 'src/assets/images';
import styles from './navbar.module.scss';
import { CaretDownIcon } from '@components/icons';
import { getDataFromStorage, isNil } from 'src/utils/helpers';
import { CustomContainer } from '@components/layouts';
import { CartIcon } from '@components/icons/cart-icon';
import { Button } from 'antd';
import { dataShippingStorageKey } from 'src/constants/route.const';

type StoreDropdownType = {
  isOpen: boolean;
  dropdownPops?: string;
};

type DataShippingType = {
  name: string;
  provinceName: string;
  districtName: string;
  communeName: string;
  address: string;
  price: string;
  size: string;
  topping: string;
};

const Navbar = () => {
  const [storeDropdown, setStoreDropdown] = useState<StoreDropdownType>({} as StoreDropdownType);
  const [openCartDropdown, setOpenCartDropdown] = useState<boolean>(false);

  const { pathname, push } = useRouter();
  const dropdownMenuRef = useRef<HTMLDivElement>(null);

  const handleOpenDropdown = (navId: string, visible?: boolean) => {
    setStoreDropdown((prev) => ({
      ...prev,
      isOpen: !isNil(visible) ? visible : !prev.isOpen,
      dropdownPops: navId,
    }));
  };

  const handleClickOutside = useCallback((event: any) => {
    if (dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target))
      handleOpenDropdown('', false);
  }, []);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') handleOpenDropdown('', false);
  }, []);

  const renderListBooking = () => {
    const dataShipping: DataShippingType[] = getDataFromStorage(dataShippingStorageKey);
    if (!dataShipping) return;
    return dataShipping.map(
      ({ address, communeName, districtName, price, provinceName, size, topping, name }) => (
        <div className={styles.itemBooking}>
          <div className="text-12 font-semibold text-gray-400">Delivering...</div>
          <div className="font-bold">
            {name}{' '}
            <span className="text-14 font-medium">
              ({size}, {topping})
            </span>
          </div>
          <div className="text-[#ea8025]">{price}</div>
          <div className="text-14">
            {address}, {communeName}, {districtName}, {provinceName}
          </div>
        </div>
      ),
    );
  };

  const handleOpenCartDropdown = () => {
    setOpenCartDropdown((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('keydown', handleKeyPress, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('keydown', handleKeyPress, true);
    };
  }, [dropdownMenuRef, handleClickOutside, handleKeyPress]);

  return (
    <header className="font-regular sticky top-0 left-0 bg-[#fff] py-4 opacity-90 z-10 border-b border-solid border-[#00000026]">
      <CustomContainer className="flex items-center">
        <Image src={logo} alt="" className="cursor-pointer" onClick={() => push('/')} />
        <div className="flex flex-row items-center ml-16">
          {navbarConfig.map((nav) => {
            if (!nav.children) {
              return (
                <div key={nav.id} className="mr-5 font-semibold">
                  <Link href={nav.path}>
                    <a className={pathname.includes(nav.id) ? 'text-3698FC' : ''}>{nav.name}</a>
                  </Link>
                </div>
              );
            }

            return (
              <div key={nav.id} className="mr-5 font-semibold dropdown">
                <div
                  className="flex flex-row items-center select-none cursor-pointer hover:text-3698FC transition-colors delay-100 ease-in-out"
                  onClick={() => handleOpenDropdown(nav.id)}>
                  {nav.name} <CaretDownIcon width={10} height={10} className="ml-1 mt-1" />
                </div>
                {storeDropdown.isOpen && storeDropdown.dropdownPops === nav.id && nav.children && (
                  <div className="dropdown-menu flex" ref={dropdownMenuRef}>
                    {nav.children.map((navItem) => (
                      <div key={`${nav.id}:${navItem.path}`} className="mr-10 first:ml-5">
                        <div className={clsx('font-semibold', styles.subMenuItem)}>
                          <Link href={navItem.path}>
                            <a
                              className={clsx(
                                'text-16',
                                pathname.includes(navItem.id) && 'text-3698FC',
                              )}>
                              {navItem.name}
                            </a>
                          </Link>
                        </div>
                        <div className="mt-5">
                          {navItem.grandChild &&
                            navItem.grandChild.map((navGrandChild) => (
                              <div key={`${navItem.id}:${navGrandChild.path}`} className="py-1">
                                <Link href={navGrandChild.path}>
                                  <a
                                    className={clsx(
                                      styles.grandItemContent,
                                      pathname.includes(navGrandChild.id) && 'text-[#ea8025]',
                                    )}>
                                    {navGrandChild.name}
                                  </a>
                                </Link>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="relative">
            <Button
              className="border-none"
              shape="circle"
              icon={<CartIcon width={20} height={20} className="cursor-pointer ml-1.5" />}
              onClick={handleOpenCartDropdown}
            />
            {openCartDropdown && <div className="dropdown-menu">{renderListBooking()}</div>}
          </div>
        </div>
      </CustomContainer>
    </header>
  );
};

export default Navbar;
