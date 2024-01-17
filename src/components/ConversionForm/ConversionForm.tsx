import { ChangeEvent, FormEvent, memo, useState } from 'react';
import { Button, Input, Select, Spinner } from '../UI';
import styles from './ConversionForm.module.scss';
import { DEFAULT_QUOTES } from '@/db/defaultCurrencies';

type ConversionFormProps = {
  base?: string | null;
};

const DEFAULT_SELECT_OPTIONS = DEFAULT_QUOTES.map(({ code }) => ({ value: code, label: code }));

function ConversionForm({ base = 'USD' }: ConversionFormProps) {
  const [target, setTarget] = useState<string>();
  const [count, setCount] = useState<string>();

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
          labelName="Count:"
          type="number"
          min="1"
          max="1000000"
          defaultValue={1}
        />
      </div>

      <div className={`${styles.conversionForm__item} ${styles.target}`}>
        Target currency: <Select onChange={changeTargetHanlder} options={DEFAULT_SELECT_OPTIONS} />
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
