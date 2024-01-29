import { memo, SelectHTMLAttributes, useId } from 'react';

import styles from './Select.module.scss';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: { value: string | number; label: string | number }[];
  defaultOption?: string;
  labelName?: string;
  className?: string;
};

function Select({ options, defaultOption, labelName, className, ...otherProps }: SelectProps) {
  const id = useId();

  return (
    <label htmlFor={id} className={className}>
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
}

export default memo(Select);
