import { Link } from 'react-router-dom';

import styles from './LinkGroup.module.scss';

type LinkGroupProps = {
  title: string;
  links: {
    name: string;
    link: string;
  }[];
};

export default function LinkGroup({ title, links }: LinkGroupProps) {
  return (
    <div className={styles.group}>
      <p className={styles.title}>{title}</p>

      <ul className={styles.linksList}>
        {links.map(({ name, link }) => (
          <li key={name}>
            <Link to={link} className={styles.link}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
