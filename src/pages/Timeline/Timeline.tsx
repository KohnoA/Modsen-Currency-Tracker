import { Component } from 'react';
import UpdateDate from '@/components/UpdateDate';
import styles from './Timeline.module.scss';
import HistoryForm from '@/components/HistoryForm';
import CandleStick from '@/components/CandleStick';
import { Button, Modal } from '@/components/UI';
import { DEFAULT_CHART_DATA } from '@/db/defaultChartData';
import { DEFAULT_OHLC_PAIRS } from '@/db/defaultOhlcPairs';
import { getTimeFromDate } from '@/utils';

const TIME_NOW = getTimeFromDate(Date.now());
const DEFAULT_PAIR = DEFAULT_OHLC_PAIRS[0];

type TimelineStateType = {
  showModal: boolean;
};

export default class Timeline extends Component<{}, TimelineStateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  openModalHanlder = () => {
    this.setState({ showModal: true });
  };

  closeModalHandler = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;

    return (
      <main className="container">
        <UpdateDate className={styles.updateDate} time={TIME_NOW} />

        <section className={styles.info}>
          <p className="text-medium">{DEFAULT_PAIR}</p>
          <Button onClick={this.openModalHanlder} className={styles.buildButton}>
            Build Chart
          </Button>
        </section>

        <CandleStick coords={DEFAULT_CHART_DATA} />

        <Modal isActive={showModal} onClose={this.closeModalHandler}>
          <HistoryForm />
        </Modal>
      </main>
    );
  }
}
