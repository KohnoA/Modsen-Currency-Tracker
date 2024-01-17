import SpinnerIcon from '@/assets/icons/spinner-icon.svg';
import styles from './Spinner.module.scss';

export default function Spinner() {
  return (
    <SpinnerIcon className={styles.spinner} width={40} height={40}>
      Spinner
    </SpinnerIcon>
  );
}
