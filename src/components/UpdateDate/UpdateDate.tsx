import { memo } from 'react';
import styles from './UpdateDate.module.scss';

type UpdateDateProps = {
  className?: string;
  timestamp?: number | string;
};

function UpdateDate({ className, timestamp = '00:00pm' }: UpdateDateProps) {
  return (
    <p className={`text-light-xl ${styles.updateDate} ${className ?? ''}`}>
      <span className={styles.circle} />
      Last updated at {timestamp}
    </p>
  );
}

export default memo(UpdateDate);
