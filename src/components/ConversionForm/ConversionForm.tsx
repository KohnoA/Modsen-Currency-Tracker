import { ChangeEvent, FormEvent, memo, useState } from 'react';
import { Button, Spinner } from '../UI';
import styles from './ConversionForm.module.scss';
import { DEFAULT_QUOTES } from '@/db/defaultCurrencies';

type ConversionFormProps = {
  base?: string | null;
};

const DEFAULT_SELECT_OPTIONS = DEFAULT_QUOTES.map(({ code }) => code);

function ConversionForm({ base = 'USD' }: ConversionFormProps) {
  const [target, setTarget] = useState<string>();

  const onSubmitHanlder = (event: FormEvent) => {
    event.preventDefault();
    console.log(target);
  };

  const changeTargetHanlder = (event: ChangeEvent<HTMLSelectElement>) => {
    setTarget(event.target.value);
  };

  return (
    <form onSubmit={onSubmitHanlder} className={styles.conversionForm}>
      <h2 className={styles.conversionForm__title}>Currency Converter</h2>

      <p className={`${styles.conversionForm__item} ${styles.base}`}>
        Base currency: <span>{base}</span>
      </p>

      <p className={`${styles.conversionForm__item} ${styles.target}`}>
        Target currency:{' '}
        <select onChange={changeTargetHanlder} className={styles.select}>
          {DEFAULT_SELECT_OPTIONS.map((quote) => (
            <option key={quote} value={quote}>
              {quote}
            </option>
          ))}
        </select>
      </p>

      <p className={styles.result}>
        <b>CAD:</b> 1231321
      </p>

      {/* <Button>Get Latest Rate</Button> */}
      <Button>
        <Spinner />
      </Button>
    </form>
  );
}

export default memo(ConversionForm);
