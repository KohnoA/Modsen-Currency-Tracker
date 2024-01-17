import styles from './ConversionForm.module.scss';

type ConversionFormProps = {
  base?: string;
};

export default function ConversionForm({ base = 'USD' }: ConversionFormProps) {
  return (
    <section className={styles.test}>
      <p>Base currency:</p>
      <p>Target currency: {base}</p>

      <button type="button">Get Latest Rate</button>
    </section>
  );
}
