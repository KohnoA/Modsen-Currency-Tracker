import { Component } from 'react';

import { ElasticSearch } from '@/components/ElasticSearch';
import { MyMap } from '@/components/MyMap';
import { UpdateTime } from '@/components/UpdateTime';
import { BANKS_DATA } from '@/constants';
import {
  filterBanksByCurrencies,
  getBanksCurrencies,
  getMarkersOfBanks,
  getTimeFromDate,
} from '@/utils';

import styles from './styles.module.scss';

const TIME_NOW = getTimeFromDate(Date.now());
const ELASTIC_SEARCH_OPTIONS = getBanksCurrencies(BANKS_DATA);

type BankCardState = {
  markers: { desc: string; coords: [number, number] }[];
};

export class BankCard extends Component<{}, BankCardState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      markers: getMarkersOfBanks(BANKS_DATA),
    };
  }

  elasticSearchHandler = (current: string) => {
    const markers = getMarkersOfBanks(filterBanksByCurrencies(current));

    this.setState({ markers });
  };

  render() {
    const { markers } = this.state;
    const hasBanks = !!markers.length;

    return (
      <main>
        <div className={`container ${styles.wrapper}`}>
          <UpdateTime time={TIME_NOW} />

          <div className={styles.elasticSearch}>
            <p className={`text-regular-l ${styles.elasticSearch__title}`}>
              Search currency in the bank
            </p>

            <ElasticSearch
              onChange={this.elasticSearchHandler}
              placeholder="Currency search..."
              options={ELASTIC_SEARCH_OPTIONS}
            />

            {!hasBanks && (
              <p className={`text-light-s ${styles.emptyMsg}`}>
                Sorry there are no banks with this currency
              </p>
            )}
          </div>
        </div>

        <MyMap markers={markers} className={styles.map} />
      </main>
    );
  }
}
