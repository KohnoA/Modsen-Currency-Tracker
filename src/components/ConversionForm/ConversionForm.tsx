import { ChangeEvent, FormEvent, memo, useState } from 'react';
import { Button, Input, Select } from '../UI';
import styles from './ConversionForm.module.scss';
import { DEFAULT_QUOTES } from '@/db/defaultCurrencies';
import { useConverter } from '@/hooks/useConverter';

type ConversionFormProps = {
  base?: string | null;
};

const DEFAULT_SELECT_OPTIONS = DEFAULT_QUOTES.map(({ code }) => ({ value: code, label: code }));
const DEFAULT_TARGET = DEFAULT_SELECT_OPTIONS[0].value;
const DEFAULT_COUNT = 1;
const DEFAULT_BASE = 'USD';

function ConversionForm({ base }: ConversionFormProps) {
  const [target, setTarget] = useState<string>(DEFAULT_TARGET);
  const [count, setCount] = useState<number>(DEFAULT_COUNT);
  const { result, isLoading, converter } = useConverter();

  const onSubmitHanlder = (event: FormEvent) => {
    event.preventDefault();
    converter(target, count, base ?? DEFAULT_BASE);
  };

  const changeTargetHanlder = (event: ChangeEvent<HTMLSelectElement>) => {
    setTarget(event.target.value);
  };

  const changeCountHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.target.value));
  };

  return (
    <form onSubmit={onSubmitHanlder} className={styles.conversionForm}>
      <h2 className={styles.conversionForm__title}>Currency Converter</h2>

      <div className={styles.base}>
        <p className={styles.base__label}>
          Base currency: <span>{base}</span>
        </p>

        <Input
          disabled={isLoading}
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
          disabled={isLoading}
          onChange={changeTargetHanlder}
          options={DEFAULT_SELECT_OPTIONS}
          defaultValue={DEFAULT_TARGET}
        />
      </div>

      {result && (
        <p className={styles.result}>
          <b>CAD:</b> {result}
        </p>
      )}

      <Button isLoading={isLoading} disabled={isLoading}>
        Get Latest Rate
      </Button>
    </form>
  );
}

export default memo(ConversionForm);
