import { ChangeEvent, Component, FormEvent } from 'react';
import { Button, Input, Select } from '../UI';
// import { getOhlcv } from '@/services';
import { DEFAULT_QUOTES } from '@/db/defaultCurrencies';
import styles from './HistoryForm.module.scss';

const DEFAULT_SELECT_OPTIONS = DEFAULT_QUOTES.map(({ code }) => ({ value: code, label: code }));
const DEFAULT_BASE = DEFAULT_SELECT_OPTIONS[0].value;
const DEFAULT_TARGET = DEFAULT_SELECT_OPTIONS[1].value;
const DEFAULT_BASE_OPTIONS = DEFAULT_SELECT_OPTIONS.filter(({ value }) => value !== DEFAULT_TARGET);
const DEFAULT_TARGET_OPTIONS = DEFAULT_SELECT_OPTIONS.filter(({ value }) => value !== DEFAULT_BASE);
const DEFAULT_DATE = '';

type HistoryFormProps = {};

type HistoryFormState = {
  base: string;
  baseOptions: typeof DEFAULT_SELECT_OPTIONS;
  target: string;
  targetOptions: typeof DEFAULT_SELECT_OPTIONS;
  date: string;
};

export default class HistoryForm extends Component<HistoryFormProps, HistoryFormState> {
  constructor(props: HistoryFormProps) {
    super(props);

    this.state = {
      base: DEFAULT_BASE,
      baseOptions: DEFAULT_BASE_OPTIONS,
      target: DEFAULT_TARGET,
      targetOptions: DEFAULT_TARGET_OPTIONS,
      date: DEFAULT_DATE,
    };
  }

  onSubmitHanlder = (event: FormEvent) => {
    event.preventDefault();

    // const { base, target, date } = this.state;

    // getOhlcv(base, target, date).then((res) => console.log(res));
  };

  onChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ date: event.target.value });
  };

  onChangeBase = (event: ChangeEvent<HTMLSelectElement>) => {
    const base = event.target.value;
    const targetOptions = DEFAULT_SELECT_OPTIONS.filter(({ value }) => value !== base);

    this.setState({ base, targetOptions });
  };

  onChangeTarget = (event: ChangeEvent<HTMLSelectElement>) => {
    const target = event.target.value;
    const baseOptions = DEFAULT_SELECT_OPTIONS.filter(({ value }) => value !== target);

    this.setState({ target, baseOptions });
  };

  render() {
    const { base, baseOptions, target, targetOptions, date } = this.state;

    return (
      <form onSubmit={this.onSubmitHanlder} className={styles.historyForm}>
        <h2 className={styles.historyForm__title}>Create Your Chart</h2>

        <p className={`text-light-s ${styles.historyForm__desc}`}>
          Select the base currency against which the rate will be calculated. Then select the
          currency for which you want to view data. And select a date, the graph will be built
          starting from this date and show changes during the month (30 days).
        </p>

        <section className={styles.formFields}>
          <Select
            value={base}
            onChange={this.onChangeBase}
            className={styles.formFields__item}
            labelName="Base:"
            options={baseOptions}
          />
          <Select
            value={target}
            onChange={this.onChangeTarget}
            className={styles.formFields__item}
            labelName="Target:"
            options={targetOptions}
          />
          <Input
            value={date}
            onChange={this.onChangeDate}
            labelName="Start Date:"
            className={styles.formFields__item}
            type="date"
            required
            min="2018-01-01"
            max="2023-12-31"
          />
        </section>

        <Button>Build Chart</Button>
      </form>
    );
  }
}
