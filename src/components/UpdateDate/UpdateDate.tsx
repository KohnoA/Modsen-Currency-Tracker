import styles from './UpdateDate.module.scss';

type UpdateDateProps = {
  className?: string;
  timestamp?: number | string;
};

export default function UpdateDate({ className, timestamp = '00:00pm' }: UpdateDateProps) {
  return (
    <p className={`text-light-xl ${styles.updateDate} ${className ?? ''}`}>
      <span className={styles.circle} />
      Last updated at {timestamp}
    </p>
  );
}
