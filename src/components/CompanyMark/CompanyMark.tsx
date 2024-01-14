import Logo from '@/assets/icons/logo-small.svg';
import styles from './CompanyMark.module.scss';

type CompanyMarkProps = {
  className?: string;
};

export default function CompanyMark({ className }: CompanyMarkProps) {
  return (
    <div className={`${styles.companyMark} ${className ?? ''}`}>
      <Logo className={styles.companyMark__logo} width={40} height={45} />
      <p className={styles.companyMark__name}>Modsen Currency Tracker</p>
    </div>
  );
}
