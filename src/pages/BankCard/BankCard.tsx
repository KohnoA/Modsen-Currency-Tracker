import { Component } from 'react';
import UpdateDate from '@/components/UpdateDate';
import { getTimeFromDate, getBanksCurrencies, filterBanksByCurrencies } from '@/utils';
import styles from './BankCard.module.scss';
import ElasticSearch from '@/components/ElasticSearch';
import MyMap from '@/components/MyMap';
import { BANKS_DATA } from '@/db/banksData';

const TIME_NOW = getTimeFromDate(Date.now());
const ELASTIC_SEARCH_OPTIONS = getBanksCurrencies(BANKS_DATA);

type BankCardState = {
  banks: typeof BANKS_DATA;
};

export default class BankCard extends Component<{}, BankCardState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      banks: BANKS_DATA,
    };
  }

  elasticSearchHadler = (current: string) => {
    const banks = filterBanksByCurrencies(current);

    this.setState({ banks });
  };

  render() {
    const { banks } = this.state;
    const banksCoords = banks.map(({ name, coord, currencies }) => ({
      popupDesc: `${name} ${currencies}`,
      coord,
    }));

    return (
      <main>
        <div className="container">
          <UpdateDate className={styles.updateDate} time={TIME_NOW} />

          <div className={styles.elasticSearch}>
            <p className={`text-regular-l ${styles.elasticSearch__title}`}>
              Search currency in the bank
            </p>

            <ElasticSearch
              onChange={this.elasticSearchHadler}
              placeholder="Currency search..."
              options={ELASTIC_SEARCH_OPTIONS}
            />
          </div>
        </div>

        <MyMap markers={banksCoords} className={styles.map} />
      </main>
    );
  }
}
