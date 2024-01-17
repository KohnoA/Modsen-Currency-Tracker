import SpinnerIcon from '@/assets/icons/spinner-icon.svg';
import styles from './Spinner.module.scss';

type SpinnerProps = {
  className?: string;
};

export default function Spinner({ className }: SpinnerProps) {
  return (
    <span className={className}>
      <SpinnerIcon className={styles.spinner} width={40} height={40}>
        Spinner
      </SpinnerIcon>
    </span>
  );
}
