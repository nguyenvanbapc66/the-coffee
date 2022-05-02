import clsx from 'clsx';
import React from 'react';

import styles from './container.module.scss';

interface CustomContainerProps {
  children: React.ReactNode;
  className?: string;
}

const CustomContainer = ({ children, className }: CustomContainerProps) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};

export default CustomContainer;
