import { PureComponent } from 'react';

import { ElasticSearch } from '@/components/ElasticSearch';
import { MyMap } from '@/components/MyMap';
import { UpdateTime } from '@/components/UpdateTime';
import { BANKS_DATA } from '@/constants';
import { getTimeFromDate } from '@/utils';

import { filterBanksByCurrencies, getBanksCurrencies } from './utils';

import styles from './styles.module.scss';

const TIME_NOW = getTimeFromDate(Date.now());
const ELASTIC_SEARCH_OPTIONS = getBanksCurrencies(BANKS_DATA);

type BankCardState = {
  banks: typeof BANKS_DATA;
};

export class BankCard extends PureComponent<{}, BankCardState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      banks: BANKS_DATA,
    };
  }

  elasticSearchHandler = (current: string) => {
    const banks = filterBanksByCurrencies(current);

    this.setState({ banks });
  };

  render() {
    const { banks } = this.state;
    const banksCoords = banks.map(({ name, coord, currencies }) => ({
      popupDesc: `${name} ${currencies}`,
      coord,
    }));
    const hasBanks = !!banksCoords.length;

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

        <MyMap markers={banksCoords} className={styles.map} />
      </main>
    );
  }
}
