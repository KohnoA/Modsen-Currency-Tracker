import { Spinner } from '../UI';

import styles from './styles.module.scss';

export function PageLoader() {
  return <Spinner className={`container ${styles.spinner}`} width={80} height={80} />;
}
