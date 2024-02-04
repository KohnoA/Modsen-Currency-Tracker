import { ChangeEvent, PureComponent } from 'react';

import { CurrencyCard } from '@/components/CurrencyCard';
import { Button, Select } from '@/components/UI';
import { DEFAULT_CURRENCIES } from '@/constants';

import styles from './styles.module.scss';

const CURRENCIES_OPTIONS = DEFAULT_CURRENCIES.map(({ name, code }) => ({
  value: code,
  label: name,
}));
const DEFAULT_CURRENCY_OPTION = CURRENCIES_OPTIONS[0].value;
const DEFAULT_CURRENT_CURRENCY = DEFAULT_CURRENCIES[0];

type ToolbarProps = {
  showSuccess?: boolean;
  onClickBuildButton: () => void;
  resedChart: () => void;
};

type ToolbarState = {
  currentCurrency: typeof DEFAULT_CURRENT_CURRENCY;
};

export class Toolbar extends PureComponent<ToolbarProps, ToolbarState> {
  constructor(props: ToolbarProps) {
    super(props);

    this.state = { currentCurrency: DEFAULT_CURRENT_CURRENCY };
  }

  onChangeCurrency = (event: ChangeEvent<HTMLSelectElement>) => {
    const { onClickBuildButton, resedChart } = this.props;
    const currencyCode = event.target.value;
    const newCurrency =
      DEFAULT_CURRENCIES.find(({ code }) => code === currencyCode) ?? DEFAULT_CURRENT_CURRENCY;

    this.setState({ currentCurrency: newCurrency });
    resedChart();
    onClickBuildButton();
  };

  render() {
    const { onClickBuildButton, showSuccess } = this.props;
    const { currentCurrency } = this.state;

    return (
      <section className={styles.toolbar} data-testid="timeline-toolbar">
        <div>
          <Select
            data-testid="change-currency"
            onChange={this.onChangeCurrency}
            className={styles.toolbar__select}
            defaultOption={DEFAULT_CURRENCY_OPTION}
            options={CURRENCIES_OPTIONS}
          />
          <CurrencyCard className={styles.toolbar__card} {...currentCurrency} showRate={false} />
        </div>

        <div>
          <p
            data-testid="success-message"
            className={`${styles.toolbar__successMsg} ${
              showSuccess ? styles.toolbar__successMsg_active : ''
            }`}
          >
            Success!
          </p>
          <Button onClick={onClickBuildButton} className={styles.toolbar__build}>
            Build Chart
          </Button>
        </div>
      </section>
    );
  }
}
