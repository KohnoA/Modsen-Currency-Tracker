import FacebookIcon from '@/assets/icons/facebook-icon.svg';
import TwitterIcon from '@/assets/icons/twitter-icon.svg';
import InstagramIcon from '@/assets/icons/instagram-icon.svg';
import styles from './SocialList.module.scss';
import { MODSEN_LINK } from '@/constants';

const SOCIAL_LIST = [
  { Icon: FacebookIcon, label: 'Facebook', link: MODSEN_LINK },
  { Icon: InstagramIcon, label: 'Instagram', link: MODSEN_LINK },
  { Icon: TwitterIcon, label: 'Twitter', link: MODSEN_LINK },
];

export default function SocialList() {
  return (
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
  );
}
