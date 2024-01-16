/* eslint-disable react/no-array-index-key */

import { memo } from 'react';
import type { CurrenciesListType } from '@/types';
import styles from './CurrenciesList.module.scss';
import CurrencyCard from '../CurrencyCard';

type CurrenciesListProps = CurrenciesListType;

function CurrenciesList({ title, data }: CurrenciesListProps) {
  return (
    <section>
      <h4 className={`text-light-xl ${styles.title}`}>{title}</h4>

      <ul className={styles.list}>
        {data.map((cardProps, index) => (
          <CurrencyCard key={index} {...cardProps} />
        ))}
      </ul>
    </section>
  );
}

export default memo(CurrenciesList);
