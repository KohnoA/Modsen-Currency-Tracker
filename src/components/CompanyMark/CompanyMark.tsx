import { memo } from 'react';
import Logo from '@/assets/icons/logo-small.svg';
import styles from './CompanyMark.module.scss';

type CompanyMarkProps = {
  className?: string;
};

function CompanyMark({ className }: CompanyMarkProps) {
  return (
    <div className={`${styles.companyMark} ${className ?? ''}`}>
      <Logo className={styles.companyMark__logo} width={40} height={45} />
      <p className={`text-semibold-s ${styles.companyMark__name}`}>Modsen Currency Tracker</p>
    </div>
  );
}

export default memo(CompanyMark);
