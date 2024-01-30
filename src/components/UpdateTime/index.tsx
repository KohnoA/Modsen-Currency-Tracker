import { memo } from 'react';

import styles from './styles.module.scss';

type UpdateTimeProps = {
  className?: string;
  time?: number | string;
};

const DEFAULT_TIME = '00:00 PM';

export const UpdateTime = memo(({ className, time = DEFAULT_TIME }: UpdateTimeProps) => {
  return (
    <p className={`text-light-xl ${styles.updateDate} ${className ?? ''}`}>
      <span className={styles.circle} />
      Last updated at {time}
    </p>
  );
});
