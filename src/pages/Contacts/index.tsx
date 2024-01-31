import { memo } from 'react';

import { SocialList } from '@/components/SocialList';
import { AUTHOR_GITHUB, CONTACTS_INFO, MODSEN_LINK } from '@/constants';

import styles from './styles.module.scss';

export const Contacts = memo(() => (
  <main className="container">
    <h2 className={styles.title}>Contact Us</h2>

    <section className={styles.contacts}>
      <div>
        <ul className={styles.info}>
          {CONTACTS_INFO.map(({ Icon, desc }) => (
            <li key={desc} className={styles.info__item}>
              <Icon width={30} height={30} /> {desc}
            </li>
          ))}
        </ul>

        <p className={`text-light-m ${styles.copyright}`}>
          Prod. by:{' '}
          <a href={AUTHOR_GITHUB} className={styles.copyright__link}>
            KohnoA
          </a>
          {', '}
          <a href={MODSEN_LINK} className={styles.copyright__link}>
            Modsen
          </a>
        </p>
      </div>

      <SocialList className={styles.socials} />
    </section>

    <div className={`text-medium ${styles.quote}`}>
      <p className={styles.quote__text}>
        An investment in knowledge always pays the best interest.
      </p>

      <p className={`text-light-m ${styles.quote__autor}`}>- Benjamin Franklin</p>
    </div>
  </main>
));
