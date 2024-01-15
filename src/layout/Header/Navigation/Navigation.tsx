import { Link } from 'react-router-dom';
import { Switch } from '@/components/UI';
import Logo from '@/assets/icons/logo-small.svg';
import { AppRoutes } from '@/router/routes';
import styles from './Navigation.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectTheme } from '@/store/selectors';
import { changeTheme } from '@/store/slices/themeSlice';

const pagesList = [
  { page: 'Home', path: AppRoutes.HOME },
  { page: 'Timeline', path: AppRoutes.TIMELINE },
  { page: 'Bank Card', path: AppRoutes.BANK_CARD },
  { page: 'Contacts', path: AppRoutes.CONTACTS },
];

export default function Navigation() {
  const isLightTheme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const themeHandler = () => dispatch(changeTheme());

  return (
    <nav className={`container ${styles.navigation}`}>
      <Link to="/" className={styles.logo}>
        <Logo width={40} height={40} />
      </Link>

      <ul className={styles.pagesList}>
        {pagesList.map(({ page, path }) => (
          <li key={path}>
            <Link to={path} className={`text-light-s ${styles.pagesList__link}`}>
              {page}
            </Link>
          </li>
        ))}
      </ul>

      <Switch className={styles.toggler} isToggled={isLightTheme} onChange={themeHandler} />
    </nav>
  );
}
