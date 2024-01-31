import { SOCIAL_LIST } from '@/constants';

import styles from './styles.module.scss';

type SocialListProps = {
  className?: string;
};

export const SocialList = ({ className }: SocialListProps) => (
  <ul className={`${styles.socials} ${className ?? ''}`}>
    {SOCIAL_LIST.map(({ Icon, label, link }) => (
      <li key={label} className={styles.socials__item}>
        <a href={link} className={styles.socials__link}>
          <span className={styles.socials__icon}>
            <Icon width={35} height={35} />
          </span>

          {label}
        </a>
      </li>
    ))}
  </ul>
);
