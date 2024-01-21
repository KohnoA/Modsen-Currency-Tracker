import { Component } from 'react';
import UpdateDate from '@/components/UpdateDate';
import { getTimeFromDate } from '@/utils';
import styles from './BankCard.module.scss';
import ElasticSearch from '@/components/ElasticSearch';
import MyMap from '@/components/MyMap';
import { BANKS_DATA } from '@/db/banksData';

const TIME_NOW = getTimeFromDate(Date.now());
const BANKS_COORDS = BANKS_DATA.map(({ name, coord }) => ({ popupDesc: name, coord }));

export default class BankCard extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <UpdateDate className={styles.updateDate} time={TIME_NOW} />

          <div className={styles.elasticSearch}>
            <p className={`text-regular-l ${styles.elasticSearch__title}`}>
              Search currency in the bank
            </p>

            <ElasticSearch />
          </div>
        </div>

        <MyMap markers={BANKS_COORDS} className={styles.map} />
      </main>
    );
  }
}
