import { memo, ReactNode } from 'react';

import { Spinner } from '../Spinner';

import styles from './styles.module.scss';

type ButtonProps = {
  className?: string;
  isLoading?: boolean;
  children: ReactNode;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
  'data-testid'?: string;
};

export const Button = memo((props: ButtonProps) => {
  const { className, children, isLoading, disabled, href, onClick, ...other } = props;
  const Component = href ? 'a' : 'button';

  return (
    <Component
      data-testid={other['data-testid']}
      className={`text-regular-s ${styles.button} ${isLoading ? styles.button_load : ''} ${
        disabled ? styles.button_disabled : ''
      } ${className ?? ''}`}
      onClick={onClick}
    >
      <span className={styles.button__label}>{children}</span>
      <Spinner className={styles.button__spinner} />
    </Component>
  );
});
