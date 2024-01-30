import { memo } from 'react';
import { Link } from 'react-router-dom';

import { CURRENCY_MODAL_QUERY_KEY } from '@/constants';
import type { CurrenciesItemType } from '@/types';
import { truncateNumber } from '@/utils';

import styles from './styles.module.scss';

type CurrencyCardProps = CurrenciesItemType & {
  className?: string;
};

export const CurrencyCard = memo((props: CurrencyCardProps) => {
  const { name, rate, code, Icon, className } = props;

  return (
    <li data-testid="currency-card" className={`${styles.item} ${className ?? ''}`}>
      <Link
        data-testid="currency-card-link"
        to={`/?${CURRENCY_MODAL_QUERY_KEY}=${code}`}
        className={styles.card}
      >
        <Icon className={styles.card__icon} width={80} height={80} />

        <div className={styles.info}>
          <p data-testid="currency-card-name" className="text-regular-m">
            {name}
          </p>
          <p data-testid="currency-card-rate" className={styles.info__rate}>
            {code} {truncateNumber(rate)}
          </p>
        </div>
      </Link>
    </li>
  );
});
