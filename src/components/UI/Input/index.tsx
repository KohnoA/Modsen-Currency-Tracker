import { InputHTMLAttributes, memo, useId } from 'react';

import styles from './styles.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  labelName?: string;
  className?: string;
  'data-testid'?: string;
};

export const Input = memo(({ labelName, className, ...inputProps }: InputProps) => {
  const id = useId();

  return (
    <label htmlFor={id} className={`${styles.wrapper} ${className ?? ''}`}>
      {labelName}
      <input className={styles.input} id={id} {...inputProps} />
    </label>
  );
});
