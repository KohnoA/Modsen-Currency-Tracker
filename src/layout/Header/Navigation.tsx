import { Link } from 'react-router-dom';
import Logo from '@/assets/icons/logo.svg';
import { AppRoutes } from '@/router/routes';
import styles from './styles.module.scss';

export default function Navigation() {
  return (
    <nav className={`container ${styles.navigation}`}>
      <Link to="/" className={styles.logo}>
        <Logo width={40} height={40} />
      </Link>

      <ul className={styles.pagesList}>
        <li>
          <Link to={AppRoutes.HOME} className={styles.pagesList__link}>
            Home
          </Link>
        </li>
        <li>
          <Link to={AppRoutes.TIMELINE} className={styles.pagesList__link}>
            Timeline
          </Link>
        </li>
        <li>
          <Link to={AppRoutes.BANK_CARD} className={styles.pagesList__link}>
            Bank Card
          </Link>
        </li>
        <li>
          <Link to={AppRoutes.CONTACTS} className={styles.pagesList__link}>
            Contacts
          </Link>
        </li>
      </ul>

      <div style={{ width: '40px', height: '40px', backgroundColor: '#fff' }} />
    </nav>
  );
}
