import { ChangeEvent, FormEvent, memo, useState } from 'react';
import { Button, Input, Select, Spinner } from '../UI';
import styles from './ConversionForm.module.scss';
import { DEFAULT_QUOTES } from '@/db/defaultCurrencies';

type ConversionFormProps = {
  base?: string | null;
};

const DEFAULT_SELECT_OPTIONS = DEFAULT_QUOTES.map(({ code }) => ({ value: code, label: code }));
const DEFAULT_TARGET = DEFAULT_SELECT_OPTIONS[0].value;
const DEFAULT_COUNT = '1';

function ConversionForm({ base = 'USD' }: ConversionFormProps) {
  const [target, setTarget] = useState<string>(DEFAULT_TARGET);
  const [count, setCount] = useState<string>(DEFAULT_COUNT);

  const onSubmitHanlder = (event: FormEvent) => {
    event.preventDefault();
    console.log(target, count);
  };

  const changeTargetHanlder = (event: ChangeEvent<HTMLSelectElement>) => {
    setTarget(event.target.value);
  };

  const changeCountHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(event.target.value);
  };

  return (
    <form onSubmit={onSubmitHanlder} className={styles.conversionForm}>
      <h2 className={styles.conversionForm__title}>Currency Converter</h2>

      <div className={styles.base}>
        <p className={styles.base__label}>
          Base currency: <span>{base}</span>
        </p>

        <Input
          onChange={changeCountHandler}
          className={styles.base__count}
          defaultValue={DEFAULT_COUNT}
          labelName="Count:"
          max="1000000"
          type="number"
          min="1"
        />
      </div>

      <div className={styles.target}>
        Target currency:{' '}
        <Select
          onChange={changeTargetHanlder}
          options={DEFAULT_SELECT_OPTIONS}
          defaultValue={DEFAULT_TARGET}
        />
      </div>

      <p className={styles.result}>
        <b>CAD:</b> 1231321
      </p>

      <Button className={styles.submit}>
        Get Latest Rate <Spinner className={styles.submit__spinner} />
      </Button>
    </form>
  );
}

export default memo(ConversionForm);
