import { Navigation } from './Navigation';
import { Promo } from './Promo';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation />
      <Promo />
    </header>
  );
};
