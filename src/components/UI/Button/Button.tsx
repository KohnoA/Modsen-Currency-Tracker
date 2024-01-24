import { ReactNode, memo } from 'react';
import styles from './Button.module.scss';
import Spinner from '../Spinner/Spinner';

type ButtonProps = {
  className?: string;
  isLoading?: boolean;
  children: ReactNode;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
  'data-testid'?: string;
};

function Button({
  className,
  children,
  isLoading,
  disabled,
  href,
  onClick,
  ...other
}: ButtonProps) {
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
}

export default memo(Button);
