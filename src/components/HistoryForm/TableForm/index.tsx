/* eslint-disable react/no-array-index-key */

import { ChangeEvent, Component } from 'react';

import { Input } from '@/components/UI';

import styles from './styles.module.scss';

const INPUT_DESCS = ['Open', 'High', 'Low', 'Close'];
const MIN_INPUT_VALUE = 0;
const MAX_INPUT_VALUE = 1000;

type TableFormProps = {
  data: number[][];
  onChange: (x: number, y: number, value: number) => void;
};

export class TableForm extends Component<TableFormProps> {
  onChangeHandler = (event: ChangeEvent<HTMLInputElement>, x: number, y: number) => {
    const { onChange } = this.props;

    const value = Number(event.target.value);

    if (value <= MAX_INPUT_VALUE && value >= MIN_INPUT_VALUE) {
      onChange(x, y, value);
    }
  };

  render() {
    const { data } = this.props;
    const isValidAmountOfDays = !!data.length;

    return (
      <>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Day</th>
              {INPUT_DESCS.map((desc, index) => (
                <th key={index}>{desc}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((itemArr, coordX) => (
              <tr key={coordX}>
                <td>{coordX + 1}</td>

                {itemArr.map((value, coordY) => (
                  <td key={coordY}>
                    <span className="hidden">{INPUT_DESCS[coordY]} input</span>
                    <Input
                      value={value}
                      onChange={(event) => this.onChangeHandler(event, coordX, coordY)}
                      className={styles.table__input}
                      type="text"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {!isValidAmountOfDays && (
          <p className={`text-light-m ${styles.message}`}>Select a valid number of days</p>
        )}
      </>
    );
  }
}
