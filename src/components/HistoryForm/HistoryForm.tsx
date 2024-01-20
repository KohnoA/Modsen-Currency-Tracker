import { Component, FormEvent } from 'react';
import { Button, Select } from '../UI';
import styles from './HistoryForm.module.scss';

export default class HistoryForm extends Component {
  onSubmitHanlder = (event: FormEvent) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHanlder} className={styles.historyForm}>
        <Select className={styles.select} options={[{ value: 'USD', label: 'USD' }]} />
        <Select className={styles.select} options={[{ value: 'CAD', label: 'CAD' }]} />

        <label htmlFor="start-date">
          Start Date:
          <input id="start-date" type="date" required min="2018-01-01" max="2023-12-31" />
        </label>

        <Button>Submit</Button>
      </form>
    );
  }
}
