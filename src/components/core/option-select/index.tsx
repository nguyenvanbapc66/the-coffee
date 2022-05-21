import React from 'react';
import { ButtonProps } from 'antd';
import clsx from 'clsx';

import styles from './option-select.module.scss';

interface OptionSelectProps extends ButtonProps {
  children: React.ReactNode;
  isActive: boolean;
}

const OptionSelect = ({ children, isActive, ...props }: OptionSelectProps) => {
  return (
    <div
      className={clsx(styles.optionSelect, isActive && styles.active, props.className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default OptionSelect;
