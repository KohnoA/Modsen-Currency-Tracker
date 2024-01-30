import FacebookIcon from '@/assets/icons/facebook-icon.svg';
import InstagramIcon from '@/assets/icons/instagram-icon.svg';
import TwitterIcon from '@/assets/icons/twitter-icon.svg';

const { MODSEN_LINK } = process.env;

export const SOCIAL_LIST = [
  { Icon: FacebookIcon, label: 'Facebook', link: MODSEN_LINK },
  { Icon: InstagramIcon, label: 'Instagram', link: MODSEN_LINK },
  { Icon: TwitterIcon, label: 'Twitter', link: MODSEN_LINK },
];
