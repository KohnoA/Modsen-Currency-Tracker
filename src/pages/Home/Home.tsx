import CurrenciesList from '@/components/CurrenciesList';
import UpdateDate from '@/components/UpdateDate';
import styles from './Home.module.scss';

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
  return (
    <main className="container">
      <UpdateDate className={styles.updateDate} />
      <CurrenciesList title={QUOTES_DATA.title} data={QUOTES_DATA.data} />
    </main>
  );
}
