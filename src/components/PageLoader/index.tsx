import { Spinner } from '../UI';

import styles from './styles.module.scss';

export const PageLoader = () => {
  return <Spinner className={`container ${styles.spinner}`} width={80} height={80} />;
};
