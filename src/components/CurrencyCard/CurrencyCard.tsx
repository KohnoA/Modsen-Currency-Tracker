import { Link } from 'react-router-dom';
import type { CurrenciesItemType } from '@/types';
import styles from './CurrencyCard.module.scss';
import { CURRENCY_MODAL_QUERY_KEY } from '@/constants';

type CurrencyCardProps = CurrenciesItemType;

export default function CurrencyCard({ name, rate, Icon }: CurrencyCardProps) {
  return (
    <li>
      <Link to={`/?${CURRENCY_MODAL_QUERY_KEY}=${name}`} className={styles.card}>
        <Icon className={styles.card__icon} width={80} height={80} />

        <div className={styles.info}>
          <p className="text-regular-m">{name}</p>
          <p className={styles.info__rate}>R$ {rate}</p>
        </div>
      </Link>
    </li>
  );
}
