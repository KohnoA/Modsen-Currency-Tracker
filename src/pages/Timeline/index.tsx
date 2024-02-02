import { Component } from 'react';

import { CandleStick } from '@/components/CandleStick';
import { HistoryForm } from '@/components/HistoryForm';
import { Modal } from '@/components/UI';
import { UpdateTime } from '@/components/UpdateTime';
import { CandleStickSubscriber, Observer } from '@/services';
import { CandleStickData } from '@/types';
import { getTimeFromDate } from '@/utils';

import { Toolbar } from './Toolbar';

const TIME_NOW = getTimeFromDate(Date.now());
const SUCCESS_TIME = 3000;

type TimelineState = {
  showModal: boolean;
  success: boolean;
};

export class Timeline extends Component<{}, TimelineState> {
  observer: Observer<CandleStickData>;

  candleStickData: CandleStickSubscriber;

  timer: NodeJS.Timeout | null;

  constructor(props: {}) {
    super(props);

    this.state = {
      showModal: false,
      success: false,
    };

    this.timer = null;
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

  buildChartHandler = (data: number[][]) => {
    this.observer.notify({ data });

    this.toggleModalHanlder();

    if (this.timer) return;

    this.setState({ success: true }, () => {
      this.timer = setTimeout(() => {
        this.setState({ success: false });
        this.timer = null;
      }, SUCCESS_TIME);
    });
  };

  toggleModalHanlder = () => {
    this.setState((state) => ({ showModal: !state.showModal }));
  };

  resetChart = () => {
    this.observer.notify({ data: [] });
  };

  render() {
    const { showModal, success } = this.state;
    const currentData = this.candleStickData.current.data;

    return (
      <main className="container">
        <UpdateTime time={TIME_NOW} />

        <Toolbar
          success={success}
          resedChart={this.resetChart}
          onClickBuildButton={this.toggleModalHanlder}
        />

        <CandleStick data={currentData} />

        <Modal isActive={showModal} onClose={this.toggleModalHanlder}>
          <HistoryForm onSubmit={this.buildChartHandler} />
        </Modal>
      </main>
    );
  }
}
