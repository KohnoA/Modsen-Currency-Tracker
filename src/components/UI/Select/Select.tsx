import { SelectHTMLAttributes } from 'react';
import styles from './Select.module.scss';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: { value: string | number; label: string | number }[];
};

export default function Select({ options, ...otherProps }: SelectProps) {
  return (
    <select className={styles.select} {...otherProps}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
