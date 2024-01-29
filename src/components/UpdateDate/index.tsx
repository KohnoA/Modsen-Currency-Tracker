import { memo } from 'react';

import styles from './styles.module.scss';

type UpdateDateProps = {
  className?: string;
  time?: number | string;
};

const DEFAULT_TIME = '00:00 PM';

export const UpdateDate = memo(({ className, time = DEFAULT_TIME }: UpdateDateProps) => {
  return (
    <p className={`text-light-xl ${styles.updateDate} ${className ?? ''}`}>
      <span className={styles.circle} />
      Last updated at {time}
    </p>
  );
});
