import { ChangeEvent, Component, FormEvent } from 'react';

import { getOhlcv } from '@/services';

import { Button, ErrorMessage, Input, Select } from '../UI';

import { DEFAULT_DATE, DEFAULT_PAIR, MAX_DATE, MIN_DATE, PAIR_OPTIONS } from './constants';
import { HistoryFormProps, HistoryFormState } from './types';

import styles from './styles.module.scss';

export class HistoryForm extends Component<HistoryFormProps, HistoryFormState> {
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
    const { pair, date } = this.state;
    const { onSubmit } = this.props;

    event.preventDefault();
    this.setState({ isLoading: true });

    const getData = async () => {
      try {
        const response = await getOhlcv(pair, date);

        onSubmit(pair, response);
      } catch (error) {
        if (error instanceof Error) {
          this.setState({ error });
        }
      } finally {
        this.setState({ isLoading: false });
      }
    };

    getData();
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
      <form
        data-testid="history-form"
        onSubmit={this.onSubmitHanlder}
        className={styles.historyForm}
      >
        <h2 className={styles.historyForm__title}>Create Your Chart</h2>

        <p className={`text-light-s ${styles.historyForm__desc}`}>
          Select a currency pair and the date from which changes will be displayed for two months
          (60 days)
        </p>

        <section className={styles.formFields}>
          <Select
            data-testid="currency-pair"
            disabled={isLoading}
            value={pair}
            onChange={this.onChangePair}
            className={styles.formFields__item}
            labelName="Base:"
            options={pairOptions}
          />
          <Input
            data-testid="trades-date"
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

        {error && <ErrorMessage />}

        <Button data-testid="submit-chart" disabled={isLoading} isLoading={isLoading}>
          Build Chart
        </Button>
      </form>
    );
  }
}
