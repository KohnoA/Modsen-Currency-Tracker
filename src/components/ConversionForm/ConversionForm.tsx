import { Button } from '../UI';
import styles from './ConversionForm.module.scss';

type ConversionFormProps = {
  base?: string | null;
};

export default function ConversionForm({ base = 'USD' }: ConversionFormProps) {
  return (
    <section className={styles.test}>
      <h2 className={styles.title}>Currency Converter</h2>
      <p>Base currency: {base}</p>
      <p>Target currency: {base}</p>

      <Button>Get Latest Rate</Button>
    </section>
  );
}
