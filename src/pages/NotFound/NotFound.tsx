import { memo } from 'react';
import { Link } from 'react-router-dom';

import { AppRoutes } from '@/router/routes';

import styles from './NotFound.module.scss';

function NotFound() {
  return (
    <main className={`container ${styles.page}`}>
      <h2 className={`text-semibold-l ${styles.title}`}>404</h2>

      <p className={`text-regular-l ${styles.desc}`}>Page Not Found</p>

      <Link className={styles.link} to={AppRoutes.HOME}>
        Return to Home
      </Link>
    </main>
  );
}

export default memo(NotFound);
