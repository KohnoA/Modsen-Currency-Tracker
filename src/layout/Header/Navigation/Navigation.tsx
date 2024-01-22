import { KeyboardEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Switch } from '@/components/UI';
import Logo from '@/assets/icons/logo-small.svg';
import { AppRoutes } from '@/router/routes';
import styles from './Navigation.module.scss';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectTheme } from '@/store/selectors';
import { changeTheme } from '@/store/slices/themeSlice';
import CrossIcon from '@/assets/icons/cross-icon.svg';

const pagesList = [
  { page: 'Home', path: AppRoutes.HOME },
  { page: 'Timeline', path: AppRoutes.TIMELINE },
  { page: 'Bank Card', path: AppRoutes.BANK_CARD },
  { page: 'Contacts', path: AppRoutes.CONTACTS },
];

export default function Navigation() {
  const isLightTheme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const [showBurder, setShowBurger] = useState<boolean>(false);

  const themeHandler = () => dispatch(changeTheme());

  const burgerOpenHandler = () => setShowBurger(true);

  const burgerCloseHandler = () => setShowBurger(false);

  const hanldeKeyDownBurger = (event: KeyboardEvent) => {
    if (event.code === 'Enter') setShowBurger(true);
  };

  return (
    <nav className={`container ${styles.navigation}`}>
      <Link to="/" className={styles.logo}>
        <Logo width={40} height={40} />
      </Link>

      <ul className={`${styles.pagesList} ${showBurder ? styles.pagesList_active : ''}`}>
        {pagesList.map(({ page, path }) => (
          <li key={path}>
            <Link to={path} className={`text-light-s ${styles.pagesList__link}`}>
              {page}
            </Link>
          </li>
        ))}

        <li className={styles.pagesList__close}>
          <button onClick={burgerCloseHandler} type="button">
            <span className="hidden">Close Navigation</span>
            <CrossIcon width={50} height={50} />
          </button>
        </li>
      </ul>

      <Switch className={styles.toggler} isToggled={isLightTheme} onChange={themeHandler} />

      <div
        onClick={burgerOpenHandler}
        onKeyDown={hanldeKeyDownBurger}
        className={styles.burger}
        role="button"
        tabIndex={0}
      >
        <span className="hidden">Show Navigation</span>
        <span className={styles.burger__line} />
        <span className={styles.burger__line} />
        <span className={styles.burger__line} />
      </div>
    </nav>
  );
}
