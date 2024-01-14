import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';
import { AppRoutes } from '@/router/routes';

export default function NotFound() {
  return (
    <main className={`container ${styles.page}`}>
      <h2 className={styles.title}>404</h2>

      <p className={styles.desc}>Page Not Found</p>

      <Link className={styles.link} to={AppRoutes.HOME}>
        Return to Home
      </Link>
    </main>
  );
}
