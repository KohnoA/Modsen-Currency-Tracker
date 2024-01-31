import { memo } from 'react';

import { ICONS } from '@/constants';

import styles from './styles.module.scss';

type SpinnerProps = {
  className?: string;
  width?: number;
  height?: number;
};

const DEFAULT_WIDTH = 40;
const DEFAULT_HEIGHT = 40;
const { SpinnerIcon } = ICONS;

export const Spinner = memo(({ className, width, height }: SpinnerProps) => (
  <span className={className}>
    <SpinnerIcon
      className={styles.spinner}
      width={width ?? DEFAULT_WIDTH}
      height={height ?? DEFAULT_HEIGHT}
    />
  </span>
));
