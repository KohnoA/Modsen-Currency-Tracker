import { ChangeEvent, FormEvent, memo, useState } from 'react';
import { Button, ErrorMessage, Input, Select } from '../UI';
import styles from './ConversionForm.module.scss';
import { DEFAULT_QUOTES } from '@/db/defaultCurrencies';
import { useConverter } from '@/hooks/useConverter';

type ConversionFormProps = {
  base?: string | null;
};

const DEFAULT_SELECT_OPTIONS = DEFAULT_QUOTES.map(({ code }) => ({ value: code, label: code }));
const DEFAULT_BASE = 'USD';
const DEFAULT_TARGET = DEFAULT_SELECT_OPTIONS[1].value;
const DEFAULT_COUNT = 1;

function ConversionForm({ base }: ConversionFormProps) {
  const [target, setTarget] = useState<string>(DEFAULT_TARGET);
  const [count, setCount] = useState<number>(DEFAULT_COUNT);
  const { result, isLoading, error, converter, reset } = useConverter();

  const targetOptions = DEFAULT_SELECT_OPTIONS.filter(({ value }) => value !== base);

  const onSubmitHanlder = (event: FormEvent) => {
    event.preventDefault();
    converter(target, count, base ?? DEFAULT_BASE);
  };

  const changeTargetHanlder = (event: ChangeEvent<HTMLSelectElement>) => {
    reset();
    setTarget(event.target.value);
  };

  const changeCountHandler = (event: ChangeEvent<HTMLInputElement>) => {
    reset();
    setCount(Number(event.target.value));
  };

  return (
    <form
      onSubmit={onSubmitHanlder}
      className={styles.conversionForm}
      data-testid="conversion-form"
    >
      <h2 className={styles.conversionForm__title}>Currency Converter</h2>

      <div className={styles.base}>
        <p className={styles.base__label}>
          Base currency: <span data-testid="base-currency">{base}</span>
        </p>

        <Input
          data-testid="currency-count"
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

      <Select
        data-testid="target-currency"
        labelName="Target currency"
        className={styles.target}
        disabled={isLoading}
        onChange={changeTargetHanlder}
        options={targetOptions}
        defaultValue={DEFAULT_TARGET}
      />

      {error && <ErrorMessage />}

      {result && (
        <p data-testid="result-conversion" className={styles.result}>
          <b>{target}:</b> {result}
        </p>
      )}

      <Button data-testid="get-rate" isLoading={isLoading} disabled={isLoading}>
        Get Latest Rate
      </Button>
    </form>
  );
}

export default memo(ConversionForm);
