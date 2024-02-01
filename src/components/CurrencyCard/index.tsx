import { KeyboardEvent, memo } from 'react';

import type { CurrenciesItemType } from '@/types';
import { truncateNumber } from '@/utils';

import styles from './styles.module.scss';

type CurrencyCardProps = CurrenciesItemType & {
  className?: string;
  showRate?: boolean;
  onClick?: (id: string) => void;
};

export const CurrencyCard = memo((props: CurrencyCardProps) => {
  const { name, rate, code, Icon, className, showRate = true, onClick } = props;

  const onClickHandler = () => {
    if (onClick) onClick(code);
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.code === 'Enter' && onClick) {
      onClick(code);
    }
  };

  return (
    <li
      data-testid="currency-card"
      className={`${styles.card} ${className ?? ''}`}
      onClick={onClickHandler}
      onKeyDown={onKeyDownHandler}
      tabIndex={0}
      role="tab"
    >
      <Icon className={styles.card__icon} width={80} height={80} />

      <div className={styles.info}>
        <p data-testid="currency-card-name" className="text-regular-m">
          {name}
        </p>
        <p data-testid="currency-card-rate" className={styles.info__rate}>
          {code} {showRate && truncateNumber(rate)}
        </p>
      </div>
    </li>
  );
});
