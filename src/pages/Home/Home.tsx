import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import CurrenciesList from '@/components/CurrenciesList';
import UpdateDate from '@/components/UpdateDate';
import styles from './Home.module.scss';
import { Modal } from '@/components/UI';
import ConversionForm from '@/components/ConversionForm';
import { CURRENCY_MODAL_QUERY_KEY } from '@/constants';
import DollarIcon from '@/assets/icons/dollar-icon.svg';
import { getCurrenciesRateCached } from '@/utils';

const QUOTES_DATA = {
  title: 'Quotes',
  data: [
    {
      Icon: DollarIcon,
      name: 'Commercial Dollar',
      rate: '5,13',
    },
    {
      Icon: DollarIcon,
      name: 'Commercial Dollar',
      rate: '5,13',
    },
    {
      Icon: DollarIcon,
      name: 'Commercial Dollar',
      rate: '5,13',
    },
  ],
};

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showModal = !!searchParams.get(CURRENCY_MODAL_QUERY_KEY);

  const quotes = useMemo(() => QUOTES_DATA, []);

  const closeModal = () => {
    searchParams.delete(CURRENCY_MODAL_QUERY_KEY);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    getCurrenciesRateCached(['BYN', 'USD', 'CAD']);
  }, []);

  return (
    <main className="container">
      <UpdateDate className={styles.updateDate} />
      <CurrenciesList title={quotes.title} data={quotes.data} />

      <Modal isActive={showModal} onClose={closeModal}>
        <ConversionForm />
        <p>{searchParams.get(CURRENCY_MODAL_QUERY_KEY)}</p>
      </Modal>
    </main>
  );
}
