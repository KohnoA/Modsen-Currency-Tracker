import { memo } from 'react';
import { Link } from 'react-router-dom';
import type { CurrenciesItemType } from '@/types';
import styles from './CurrencyCard.module.scss';
import { CURRENCY_MODAL_QUERY_KEY } from '@/constants';
import { truncateNumber } from '@/utils';

type CurrencyCardProps = CurrenciesItemType;

function CurrencyCard({ name, rate, code, Icon }: CurrencyCardProps) {
  return (
    <li>
      <Link to={`/?${CURRENCY_MODAL_QUERY_KEY}=${code}`} className={styles.card}>
        <Icon className={styles.card__icon} width={80} height={80} />

        <div className={styles.info}>
          <p className="text-regular-m">{name}</p>
          <p className={styles.info__rate}>
            {code} {truncateNumber(rate)}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default memo(CurrencyCard);
