import styles from './styles.module.scss';

const DEFAULT_LINK_VALUE = '#';

type LinkGroupProps = {
  title: string;
  links: {
    name: string;
    link?: string;
  }[];
};

export const LinkGroup = ({ title, links }: LinkGroupProps) => (
  <div className={styles.group}>
    <p className={styles.title}>{title}</p>

    <ul className={styles.linksList}>
      {links.map(({ name, link }) => (
        <li key={name}>
          <a href={link ?? DEFAULT_LINK_VALUE} className={styles.link}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
