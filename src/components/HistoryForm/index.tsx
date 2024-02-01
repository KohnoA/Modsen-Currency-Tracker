import { ChangeEvent, Component, FormEvent } from 'react';

import { Button, Input } from '../UI';

import { TableForm } from './TableForm';
import { addOrTrimTableData, addTimestamps, generateRandomData } from './utils';

import styles from './styles.module.scss';

const DEFAULT_AMOUNT_OF_DAYS = '14';
const MAX_AMOUNT_OF_DAYS = 31;
const MIN_AMOUNT_OF_DAYS = 0;

type HistoryFormProps = {
  onSubmit: (data: number[][]) => void;
};

type HistoryFormState = {
  amount: string;
  tableData: number[][];
};

export class HistoryForm extends Component<HistoryFormProps, HistoryFormState> {
  constructor(props: HistoryFormProps) {
    super(props);

    this.state = {
      amount: DEFAULT_AMOUNT_OF_DAYS,
      tableData: generateRandomData(Number(DEFAULT_AMOUNT_OF_DAYS)),
    };
  }

  onSubmitHanlder = (event: FormEvent) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { amount, tableData } = this.state;

    if (amount) {
      onSubmit(addTimestamps(tableData));
    }
  };

  generateTableData = () => {
    const { amount } = this.state;

    this.setState({ tableData: generateRandomData(Number(amount)) });
  };

  onChangeAmountOfDays = (event: ChangeEvent<HTMLInputElement>) => {
    const { tableData } = this.state;
    const amount = Number(event.target.value);

    if (amount <= MAX_AMOUNT_OF_DAYS && amount >= MIN_AMOUNT_OF_DAYS) {
      const newTableData = addOrTrimTableData(tableData, amount);

      this.setState({ amount: event.target.value, tableData: newTableData });
    }
  };

  onChangeDaysData = (x: number, y: number, value: number) => {
    const { tableData } = this.state;
    if (tableData[x][y] === value) return;

    const tableDataCopy = structuredClone(tableData);
    tableDataCopy[x][y] = value;

    this.setState({ tableData: tableDataCopy });
  };

  render() {
    const { amount, tableData } = this.state;
    const isInvalidAmount = Number(amount) === MIN_AMOUNT_OF_DAYS;

    return (
      <form
        data-testid="history-form"
        onSubmit={this.onSubmitHanlder}
        className={styles.historyForm}
      >
        <h2 className={styles.historyForm__title}>Create Your Chart</h2>

        <Input
          className={styles.historyForm__amountOfDays}
          onChange={this.onChangeAmountOfDays}
          type="number"
          min={MIN_AMOUNT_OF_DAYS}
          max={MAX_AMOUNT_OF_DAYS}
          value={amount}
          labelName={`Amount of days (from ${MIN_AMOUNT_OF_DAYS}st to ${MAX_AMOUNT_OF_DAYS}st):`}
          autoFocus
        />

        <TableForm data={tableData} onChange={this.onChangeDaysData} />

        <div className={styles.historyForm__buttons}>
          <Button data-testid="submit-chart" type="submit" disabled={isInvalidAmount}>
            Build Chart
          </Button>
          <Button disabled={isInvalidAmount} type="button" onClick={this.generateTableData}>
            Random
          </Button>
        </div>
      </form>
    );
  }
}
