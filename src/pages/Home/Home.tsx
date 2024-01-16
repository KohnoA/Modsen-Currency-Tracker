import { useSearchParams } from 'react-router-dom';
import CurrenciesList from '@/components/CurrenciesList';
import UpdateDate from '@/components/UpdateDate';
import styles from './Home.module.scss';
import { Modal } from '@/components/UI';
import { CURRENCY_MODAL_QUERY_KEY } from '@/constants';
import DollarIcon from '@/assets/icons/dollar-icon.svg';

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

  const closeModal = () => {
    searchParams.delete(CURRENCY_MODAL_QUERY_KEY);
    setSearchParams(searchParams);
  };

  return (
    <main className="container">
      <UpdateDate className={styles.updateDate} />
      <CurrenciesList title={QUOTES_DATA.title} data={QUOTES_DATA.data} />

      <Modal isActive={showModal} onClose={closeModal}>
        <p>{searchParams.get(CURRENCY_MODAL_QUERY_KEY)}</p>
      </Modal>
    </main>
  );
}
