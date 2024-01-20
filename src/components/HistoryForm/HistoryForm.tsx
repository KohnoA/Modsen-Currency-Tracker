import { Component, FormEvent } from 'react';
import { Button, Input, Select } from '../UI';
import styles from './HistoryForm.module.scss';

export default class HistoryForm extends Component {
  onSubmitHanlder = (event: FormEvent) => {
    event.preventDefault();
  };

  render() {
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
            className={styles.formFields__item}
            labelName="Base:"
            options={[{ value: 'USD', label: 'USD' }]}
          />
          <Select
            className={styles.formFields__item}
            labelName="Target:"
            options={[{ value: 'CAD', label: 'CAD' }]}
          />
          <Input
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
