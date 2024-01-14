import styles from './Promo.module.scss';
import Logo from '@/assets/icons/logo.svg';

export default function Promo() {
  return (
    <section className={styles.promo}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            <span className="">Modsen Currency</span>
            <span className={styles.title__emphasis}>Tracker</span>
          </h1>

          <p className={styles.desc}>Quotes for the dollar and other international currencies.</p>
        </div>

        <Logo className={styles.logo} width={300} height={312} />
      </div>
    </section>
  );
}
