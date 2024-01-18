import styles from './Contacts.module.scss';
import { AUTHOR_GITHUB, MODSEN_LINK } from '@/constants';

import FacebookIcon from '@/assets/icons/facebook-icon.svg';
import TwitterIcon from '@/assets/icons/twitter-icon.svg';
import InstagramIcon from '@/assets/icons/instagram-icon.svg';
import MarkerIcon from '@/assets/icons/marker-icon.svg';
import PhoneIcon from '@/assets/icons/phone-icon.svg';
import MailIcon from '@/assets/icons/mail-icon.svg';

const SOCIAL_LIST = [
  { Icon: FacebookIcon, label: 'Facebook', link: MODSEN_LINK },
  { Icon: InstagramIcon, label: 'Instagram', link: MODSEN_LINK },
  { Icon: TwitterIcon, label: 'Twitter', link: MODSEN_LINK },
];

export default function Contacts() {
  return (
    <main className="container">
      <h2 className={styles.title}>Contact Us</h2>

      <section className={styles.contacts}>
        <div>
          <ul className={styles.info}>
            <li className={styles.info__item}>
              <MarkerIcon width={30} height={30} /> 8558 Green Rd., LA
            </li>
            <li className={styles.info__item}>
              <PhoneIcon width={30} height={30} /> +1 (603) 555-0123
            </li>
            <li className={styles.info__item}>
              <MailIcon width={30} height={30} /> example@gmail.com
            </li>
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

        <ul className={styles.socials}>
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
      </section>

      <div className={`text-medium ${styles.quote}`}>
        <p className={styles.quote__text}>
          An investment in knowledge always pays the best interest.
        </p>

        <p className={`text-light-m ${styles.quote__autor}`}>- Benjamin Franklin</p>
      </div>
    </main>
  );
}
