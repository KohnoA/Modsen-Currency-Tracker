import { memo } from 'react';

import Logo from '@/assets/icons/logo.svg';

import styles from './Promo.module.scss';

function Promo() {
  return (
    <section className={styles.promo}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.info}>
          <h1 className={`text-semibold-m ${styles.title}`}>
            <span className="">Modsen Currency</span>
            <span className="text-semibold-l">Tracker</span>
          </h1>

          <p className={`text-light-m ${styles.desc}`}>
            Quotes for the dollar and other international currencies.
          </p>
        </div>

        <Logo className={styles.logo} width={300} height={312} />
      </div>
    </section>
  );
}

export default memo(Promo);
