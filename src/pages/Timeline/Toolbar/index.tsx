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
  onClickBuildButton: () => void;
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
    const { onClickBuildButton } = this.props;
    const currencyCode = event.target.value;
    const newCurrency =
      DEFAULT_CURRENCIES.find(({ code }) => code === currencyCode) ?? DEFAULT_CURRENT_CURRENCY;

    this.setState({ currentCurrency: newCurrency });
    onClickBuildButton();
  };

  render() {
    const { onClickBuildButton } = this.props;
    const { currentCurrency } = this.state;

    return (
      <section className={styles.toolbar}>
        <div className={styles.wrapper}>
          <Select
            onChange={this.onChangeCurrency}
            className={styles.toolbar__select}
            defaultOption={DEFAULT_CURRENCY_OPTION}
            options={CURRENCIES_OPTIONS}
          />
          <CurrencyCard className={styles.toolbar__card} {...currentCurrency} showRate={false} />
        </div>

        <Button onClick={onClickBuildButton} className={styles.toolbar__build}>
          Build Chart
        </Button>
      </section>
    );
  }
}
