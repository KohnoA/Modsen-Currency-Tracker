import { Component } from 'react';
import UpdateDate from '@/components/UpdateDate';
import styles from './Timeline.module.scss';
import HistoryForm from '@/components/HistoryForm';
import CandleStick from '@/components/CandleStick';
import { Button, Modal } from '@/components/UI';
import CurrencyCard from '@/components/CurrencyCard';
import { DEFAULT_QUOTES } from '@/db/defaultCurrencies';

const DEFAULT_BASE = 'USD';
const DEFAULT_TARGET = 'CAD';
const DEFAULT_CARD = DEFAULT_QUOTES[0];

type TimelinePropsType = {
  test: string;
};

type TimelineStateType = {
  showModal: boolean;
};

export default class Timeline extends Component<TimelinePropsType, TimelineStateType> {
  constructor(props: TimelinePropsType) {
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
        <UpdateDate className={styles.updateDate} />

        <section className={styles.info}>
          <CurrencyCard className={styles.card} {...DEFAULT_CARD} />

          <div className={styles.wrapper}>
            <p>
              {DEFAULT_BASE}/{DEFAULT_TARGET}
            </p>{' '}
            <Button onClick={this.openModalHanlder} className={styles.buildButton}>
              Build Chart
            </Button>
          </div>
        </section>

        <CandleStick />

        <Modal isActive={showModal} onClose={this.closeModalHandler}>
          <HistoryForm />
        </Modal>
      </main>
    );
  }
}
