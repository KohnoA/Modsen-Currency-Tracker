import { Component } from 'react';
import UpdateDate from '@/components/UpdateDate';
import { getTimeFromDate } from '@/utils';
import styles from './BankCard.module.scss';
import ElasticSearch from '@/components/ElasticSearch';
import MyMap from '@/components/MyMap';

const TIME_NOW = getTimeFromDate(Date.now());

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

        <MyMap className={styles.map} />
      </main>
    );
  }
}
