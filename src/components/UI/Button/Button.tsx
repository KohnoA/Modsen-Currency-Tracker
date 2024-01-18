import { ReactNode } from 'react';
import styles from './Button.module.scss';
import Spinner from '../Spinner/Spinner';

type ButtonProps = {
  className?: string;
  isLoading?: boolean;
  children: ReactNode;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  className,
  children,
  isLoading,
  disabled,
  href,
  onClick,
}: ButtonProps) {
  const Component = href ? 'a' : 'button';

  return (
    <Component
      className={`text-medium ${styles.button} ${isLoading ? styles.button_load : ''} ${
        disabled ? styles.button_disabled : ''
      } ${className ?? ''}`}
      onClick={onClick}
    >
      <span className={styles.button__label}>{children}</span>
      <Spinner className={styles.button__spinner} />
    </Component>
  );
}
