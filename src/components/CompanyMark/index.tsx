import { memo } from 'react';

import { ICONS } from '@/constants';

import styles from './styles.module.scss';

type CompanyMarkProps = {
  className?: string;
};

const { LogoSmallIcon } = ICONS;

export const CompanyMark = memo(({ className }: CompanyMarkProps) => (
  <div className={`${styles.companyMark} ${className ?? ''}`}>
    <LogoSmallIcon className={styles.companyMark__logo} width={40} height={45} />
    <p className={`text-semibold-s ${styles.companyMark__name}`}>Modsen Currency Tracker</p>
  </div>
));
