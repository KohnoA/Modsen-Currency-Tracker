import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ConversionForm } from '@/components/ConversionForm';
import { CurrenciesList } from '@/components/CurrenciesList';
import { Modal } from '@/components/UI';
import { UpdateDate } from '@/components/UpdateDate';
import { CURRENCY_MODAL_QUERY_KEY } from '@/constants';
import { useQuotes } from '@/hooks';

import styles from './Home.module.scss';

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showModal = !!searchParams.get(CURRENCY_MODAL_QUERY_KEY);
  const baseCurrencyInModal = searchParams.get(CURRENCY_MODAL_QUERY_KEY);
  const { time, quotes } = useQuotes();

  const closeModal = () => {
    searchParams.delete(CURRENCY_MODAL_QUERY_KEY);
    setSearchParams(searchParams);
  };

  return (
    <main className="container">
      <UpdateDate time={time} className={styles.updateDate} />
      <CurrenciesList title="Quotes" data={quotes} />

      <Modal isActive={showModal} onClose={closeModal}>
        <ConversionForm base={baseCurrencyInModal} />
      </Modal>
    </main>
  );
}

export default memo(Home);
