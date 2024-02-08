import { memo, SelectHTMLAttributes, useId } from 'react';

import styles from './styles.module.scss';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: { value: string | number; label: string | number }[];
  defaultOption?: string;
  labelName?: string;
  className?: string;
};

export const Select = memo((props: SelectProps) => {
  const { options, defaultOption, labelName, className, ...otherProps } = props;
  const id = useId();

  return (
    <label htmlFor={id} className={`${styles.wrapper} ${className ?? ''}`}>
      {labelName}
      <select id={id} className={styles.select} defaultValue={defaultOption} {...otherProps}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
});
