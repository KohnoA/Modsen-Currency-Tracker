import { ChangeEvent, Component, FormEvent } from 'react';
import { Button, Input, Select } from '../UI';
// import { getOhlcv } from '@/services';
import styles from './HistoryForm.module.scss';
import { getDateMonthAgo } from '@/utils';
import { DEFAULT_OHLC_PAIRS } from '@/db/defaultOhlcPairs';

const PAIR_OPTIONS = DEFAULT_OHLC_PAIRS.map((pair) => ({ value: pair, label: pair }));
const DEFAULT_PAIR = DEFAULT_OHLC_PAIRS[0];
const DEFAULT_DATE = '';
const MIN_DATE = '2018-01-01';
const MAX_DATE = getDateMonthAgo();

type HistoryFormProps = {};

type HistoryFormState = {
  pair: string;
  pairOptions: typeof PAIR_OPTIONS;
  date: string;
  isLoading: boolean;
  error: Error | null;
};

export default class HistoryForm extends Component<HistoryFormProps, HistoryFormState> {
  constructor(props: HistoryFormProps) {
    super(props);

    this.state = {
      pair: DEFAULT_PAIR,
      pairOptions: PAIR_OPTIONS,
      date: DEFAULT_DATE,
      isLoading: false,
      error: null,
    };
  }

  onSubmitHanlder = (event: FormEvent) => {
    event.preventDefault();
    // const { pair, date } = this.state;

    // getOhlcv(pair, date).then((res) => console.log(res));
  };

  onChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ date: event.target.value });
  };

  onChangePair = (event: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ pair: event.target.value });
  };

  render() {
    const { pair, pairOptions, date, isLoading, error } = this.state;

    return (
      <form onSubmit={this.onSubmitHanlder} className={styles.historyForm}>
        <h2 className={styles.historyForm__title}>Create Your Chart</h2>

        <p className={`text-light-s ${styles.historyForm__desc}`}>
          Select a currency pair and the date from which changes will be shown during the month (30
          days)
        </p>

        <section className={styles.formFields}>
          <Select
            disabled={isLoading}
            value={pair}
            onChange={this.onChangePair}
            className={styles.formFields__item}
            labelName="Base:"
            options={pairOptions}
          />
          <Input
            disabled={isLoading}
            value={date}
            onChange={this.onChangeDate}
            labelName="Start Date:"
            className={styles.formFields__item}
            type="date"
            required
            min={MIN_DATE}
            max={MAX_DATE}
          />
        </section>

        {error && (
          <p className={`text-light-m ${styles.error}`}>Something went wrong, try again later</p>
        )}

        <Button isLoading={isLoading}>Build Chart</Button>
      </form>
    );
  }
}
