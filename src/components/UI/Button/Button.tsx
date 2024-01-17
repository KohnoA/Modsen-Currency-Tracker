import { ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  className?: string;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
};

export default function Button({ className, children, href, onClick }: ButtonProps) {
  const Component = href ? 'a' : 'button';

  return (
    <Component
      className={`text-medium ${styles.button} ${className ?? ''}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </Component>
  );
}
