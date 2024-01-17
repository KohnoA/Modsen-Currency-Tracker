import { memo } from 'react';
import styles from './CurrenciesList.module.scss';
import CurrencyCard from '../CurrencyCard';
import { CurrenciesItemType } from '@/types';

type CurrenciesListProps = {
  title: string;
  data: CurrenciesItemType[];
};

function CurrenciesList({ title, data }: CurrenciesListProps) {
  return (
    <section>
      <h4 className={`text-light-xl ${styles.title}`}>{title}</h4>

      <ul className={styles.list}>
        {data.map((cardProps) => (
          <CurrencyCard key={cardProps.code} {...cardProps} />
        ))}
      </ul>
    </section>
  );
}

export default memo(CurrenciesList);
