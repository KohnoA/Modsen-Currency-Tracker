import { useSearchParams } from 'react-router-dom';
import CurrenciesList from '@/components/CurrenciesList';
import UpdateDate from '@/components/UpdateDate';
import styles from './Home.module.scss';
import { Modal } from '@/components/UI';
import ConversionForm from '@/components/ConversionForm';
import { CURRENCY_MODAL_QUERY_KEY } from '@/constants';
import { useQuotes } from '@/hooks';

export default function Home() {
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
