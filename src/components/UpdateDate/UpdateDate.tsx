import { memo } from 'react';
import styles from './UpdateDate.module.scss';

type UpdateDateProps = {
  className?: string;
  time?: number | string;
};

const DEFAULT_TIME = '00:00 PM';

function UpdateDate({ className, time = DEFAULT_TIME }: UpdateDateProps) {
  return (
    <p className={`text-light-xl ${styles.updateDate} ${className ?? ''}`}>
      <span className={styles.circle} />
      Last updated at {time}
    </p>
  );
}

export default memo(UpdateDate);
