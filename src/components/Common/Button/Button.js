import React from 'react';
import Link from 'next/link';
import styles from './Button.module.scss';

const Button = ({ href, children, size = 'normal', color = 'primary', className, ...props }) => {
  let themeName = styles.primary;
  if (color === 'light') themeName = styles.light;
  else if (color === 'dark') themeName = styles.dark;

  let sizeStyle = size === 'small' ? styles.small : '';

  if (!href) {
    return (
      <button
        className={`${styles.button}${className ? ` ${className}` : ''} ${themeName} ${sizeStyle}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <Link {...{ href }} prefetch={false}>
      <button
        className={`${styles.button}${className ? ` ${className}` : ''} ${themeName} ${sizeStyle}`}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
