import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CurrenciesList from '@/components/CurrenciesList';
import UpdateDate from '@/components/UpdateDate';
import styles from './Home.module.scss';
import { Modal } from '@/components/UI';
import ConversionForm from '@/components/ConversionForm';
import { CURRENCY_MODAL_QUERY_KEY } from '@/constants';
import { getCurrenciesRateCached, getTimeFromDate } from '@/utils';
import { DEFAULT_QUOTES } from '@/db/defaultCurrencies';

const QUOTES_LIST_DATA = {
  title: 'Quotes',
  data: DEFAULT_QUOTES,
};

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showModal = !!searchParams.get(CURRENCY_MODAL_QUERY_KEY);
  const [time, setTime] = useState<string>();

  const quotes = useMemo(() => QUOTES_LIST_DATA, []);

  const closeModal = () => {
    searchParams.delete(CURRENCY_MODAL_QUERY_KEY);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    getCurrenciesRateCached(['BYN', 'USD', 'CAD']).then((res) => {
      setTime(getTimeFromDate(res.meta.last_updated_at));
    });
  }, []);

  return (
    <main className="container">
      <UpdateDate time={time} className={styles.updateDate} />
      <CurrenciesList title={quotes.title} data={quotes.data} />

      <Modal isActive={showModal} onClose={closeModal}>
        <ConversionForm />
        <p>{searchParams.get(CURRENCY_MODAL_QUERY_KEY)}</p>
      </Modal>
    </main>
  );
}
