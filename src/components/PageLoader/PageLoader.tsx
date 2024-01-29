import { Spinner } from '../UI';

import styles from './PageLoader.module.scss';

export default function PageLoader() {
  return <Spinner className={`container ${styles.spinner}`} width={80} height={80} />;
}
