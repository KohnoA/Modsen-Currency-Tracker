import { ICONS } from './icons';

const { MODSEN_LINK } = process.env;
const { FacebookIcon, InstagramIcon, TwitterIcon } = ICONS;

export const SOCIAL_LIST = [
  { Icon: FacebookIcon, label: 'Facebook', link: MODSEN_LINK },
  { Icon: InstagramIcon, label: 'Instagram', link: MODSEN_LINK },
  { Icon: TwitterIcon, label: 'Twitter', link: MODSEN_LINK },
];
