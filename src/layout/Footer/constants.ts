import { AppRoutes } from '@/router/routes';

export const FOOTER_LINKS_GROUPS = [
  {
    title: 'General',
    links: [
      { name: 'Market', link: AppRoutes.HOME },
      { name: 'Service', link: AppRoutes.HOME },
    ],
  },
  {
    title: 'Product',
    links: [
      { name: 'Sparks', link: AppRoutes.HOME },
      { name: 'Snaps', link: AppRoutes.HOME },
    ],
  },
  {
    title: 'Community',
    links: [
      { name: 'Ideas', link: AppRoutes.HOME },
      { name: 'Streams', link: AppRoutes.HOME },
    ],
  },
];
