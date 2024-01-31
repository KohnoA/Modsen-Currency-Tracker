import { PureComponent } from 'react';

import { CandleStick } from '@/components/CandleStick';
import { HistoryForm } from '@/components/HistoryForm';
import { Modal } from '@/components/UI';
import { UpdateTime } from '@/components/UpdateTime';
import { CandleStickSubscriber, Observer } from '@/services';
import { CandleStickData, OhlcvResponseType } from '@/types';
import { getTimeFromDate } from '@/utils';
import { ohlcvResponseToChartData } from '@/utils/ohlcvResponseToChartData';

import { Toolbar } from './Toolbar';

const TIME_NOW = getTimeFromDate(Date.now());

type TimelineState = {
  showModal: boolean;
};

export class Timeline extends PureComponent<{}, TimelineState> {
  observer: Observer<CandleStickData>;

  candleStickData: CandleStickSubscriber;

  constructor(props: {}) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.observer = new Observer();
    this.candleStickData = new CandleStickSubscriber();

    this.toggleModalHanlder = this.toggleModalHanlder.bind(this);
  }

  componentDidMount(): void {
    this.observer.subscribe(this.candleStickData);
  }

  componentWillUnmount(): void {
    this.observer.unsubscribe(this.candleStickData);
  }

  buildChartHandler = (pair: string, data: OhlcvResponseType[]) => {
    this.observer.notify([{ data: ohlcvResponseToChartData(data) }]);

    this.toggleModalHanlder();
  };

  toggleModalHanlder() {
    this.setState((state) => ({ showModal: !state.showModal }));
  }

  render() {
    const { showModal } = this.state;

    return (
      <main className="container">
        <UpdateTime time={TIME_NOW} />

        <Toolbar onClickBuildButton={this.toggleModalHanlder} />

        <CandleStick data={this.candleStickData.current} />

        <Modal isActive={showModal} onClose={this.toggleModalHanlder}>
          <HistoryForm onSubmit={this.buildChartHandler} />
        </Modal>
      </main>
    );
  }
}
