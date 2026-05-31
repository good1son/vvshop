import { memo } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = ({
  variant,
  children,
  type = 'button',
  disabled,
  ...props
}) => {
  const classes = clsx(
    styles.button,
    variant && styles[variant],
    disabled && styles.disabled
  );
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default memo(Button);
