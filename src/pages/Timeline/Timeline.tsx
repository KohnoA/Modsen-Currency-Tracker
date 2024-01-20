import { Component } from 'react';
import UpdateDate from '@/components/UpdateDate';
import styles from './Timeline.module.scss';
import HistoryForm from '@/components/HistoryForm';
import CandleStick from '@/components/CandleStick';

export default class Timeline extends Component {
  render() {
    return (
      <main className="container">
        <UpdateDate className={styles.updateDate} />

        <HistoryForm />

        <CandleStick />
      </main>
    );
  }
}
