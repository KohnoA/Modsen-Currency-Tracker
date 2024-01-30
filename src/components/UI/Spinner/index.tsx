import { memo } from 'react';

import SpinnerIcon from '@/assets/icons/spinner-icon.svg';

import styles from './styles.module.scss';

type SpinnerProps = {
  className?: string;
  width?: number;
  height?: number;
};

const DEFAULT_WIDTH = 40;
const DEFAULT_HEIGHT = 40;

export const Spinner = memo(({ className, width, height }: SpinnerProps) => {
  return (
    <span className={className}>
      <SpinnerIcon
        className={styles.spinner}
        width={width ?? DEFAULT_WIDTH}
        height={height ?? DEFAULT_HEIGHT}
      />
    </span>
  );
});
