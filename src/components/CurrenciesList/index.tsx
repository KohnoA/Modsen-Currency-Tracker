import { memo } from 'react';

import { CurrenciesItemType } from '@/types';

import { CurrencyCard } from '../CurrencyCard';

import styles from './styles.module.scss';

type CurrenciesListProps = {
  title: string;
  data: CurrenciesItemType[];
  onClickForItem?: (id: string) => void;
};

export const CurrenciesList = memo(({ title, data, onClickForItem }: CurrenciesListProps) => (
  <section data-testid="currencies-list">
    <h2 data-testid="currencies-list-title" className={`text-light-xl ${styles.title}`}>
      {title}
    </h2>

    <ul className={styles.list} role="tablist">
      {data.map((cardProps) => (
        <CurrencyCard key={cardProps.code} onClick={onClickForItem} {...cardProps} />
      ))}
    </ul>
  </section>
));
