import { PureComponent } from 'react';

import { CandleStick } from '@/components/CandleStick';
import { HistoryForm } from '@/components/HistoryForm';
import { Button, Modal } from '@/components/UI';
import { UpdateTime } from '@/components/UpdateTime';
import { DEFAULT_OHLC_PAIRS } from '@/constants';
import { CandleStickSubscriber, Observer } from '@/services';
import { CandleStickData, OhlcvResponseType } from '@/types';
import { getTimeFromDate } from '@/utils';
import { ohlcvResponseToChartData } from '@/utils/ohlcvResponseToChartData';

import styles from './styles.module.scss';

const TIME_NOW = getTimeFromDate(Date.now());
const DEFAULT_PAIR = DEFAULT_OHLC_PAIRS[0];

type TimelineState = {
  showModal: boolean;
  pair: string;
};

export class Timeline extends PureComponent<{}, TimelineState> {
  observer: Observer<CandleStickData>;

  candleStickData: CandleStickSubscriber;

  constructor(props: {}) {
    super(props);

    this.state = {
      showModal: false,
      pair: DEFAULT_PAIR,
    };

    this.observer = new Observer();
    this.candleStickData = new CandleStickSubscriber();
  }

  componentDidMount(): void {
    this.observer.subscribe(this.candleStickData);
  }

  componentWillUnmount(): void {
    this.observer.unsubscribe(this.candleStickData);
  }

  toggleModalHanlder = () => {
    this.setState((state) => ({ showModal: !state.showModal }));
  };

  buildChartHandler = (pair: string, data: OhlcvResponseType[]) => {
    this.observer.notify([{ data: ohlcvResponseToChartData(data) }]);

    this.toggleModalHanlder();
    this.setState({ pair });
  };

  render() {
    const { showModal, pair } = this.state;

    return (
      <main className="container">
        <UpdateTime time={TIME_NOW} />

        <section className={styles.info}>
          <p data-testid="trading-pair" className="text-medium">
            {pair}
          </p>
          <Button onClick={this.toggleModalHanlder} className={styles.buildButton}>
            Build Chart
          </Button>
        </section>

        <CandleStick data={this.candleStickData.current} />

        <Modal isActive={showModal} onClose={this.toggleModalHanlder}>
          <HistoryForm onSubmit={this.buildChartHandler} />
        </Modal>
      </main>
    );
  }
}
