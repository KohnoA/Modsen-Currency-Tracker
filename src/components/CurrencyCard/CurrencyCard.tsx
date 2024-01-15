import type { CurrenciesItemType } from '@/types';
import styles from './CurrencyCard.module.scss';

type CurrencyCardProps = CurrenciesItemType;

export default function CurrencyCard({ name, rate, Icon }: CurrencyCardProps) {
  return (
    <li className={styles.card}>
      <Icon className={styles.card__icon} width={80} height={80} />

      <div className={styles.info}>
        <p className="text-regular-m">{name}</p>
        <p>R$ {rate}</p>
      </div>
    </li>
  );
}
