import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Switch } from '@/components/UI';
import Logo from '@/assets/icons/logo-small.svg';
import { AppRoutes } from '@/router/routes';
import styles from './Navigation.module.scss';

const pagesList = [
  { page: 'Home', path: AppRoutes.HOME },
  { page: 'Timeline', path: AppRoutes.TIMELINE },
  { page: 'Bank Card', path: AppRoutes.BANK_CARD },
  { page: 'Contacts', path: AppRoutes.CONTACTS },
];

const INITIAL_THEME_STATE = false;

export default function Navigation() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(INITIAL_THEME_STATE);

  const themeHandler = () => setIsDarkTheme((prev) => !prev);

  return (
    <nav className={`container ${styles.navigation}`}>
      <Link to="/" className={styles.logo}>
        <Logo width={40} height={40} />
      </Link>

      <ul className={styles.pagesList}>
        {pagesList.map(({ page, path }) => (
          <li key={path}>
            <Link to={path} className={styles.pagesList__link}>
              {page}
            </Link>
          </li>
        ))}
      </ul>

      <Switch className={styles.toggler} isToggled={isDarkTheme} onChange={themeHandler} />
    </nav>
  );
}
