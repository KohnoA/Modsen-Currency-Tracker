import Navigation from './Navigation';
import Promo from './Promo';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
      <Promo />
    </header>
  );
}
