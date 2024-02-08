import { memo, useMemo } from 'react';

import { CompanyMark } from '@/components/CompanyMark';
import { FOOTER_LINK_GROUPS } from '@/constants';

import { companyDescription, copyrightDescription } from './config';
import { LinkGroup } from './LinkGroup';

import styles from './styles.module.scss';

export const Footer = memo(() => {
  const linksGroups = useMemo(() => FOOTER_LINK_GROUPS, []);

  return (
    <footer className={`container ${styles.footer}`}>
      <div className={styles.wrapper}>
        <section className={styles.companyInfo}>
          <CompanyMark className={styles.mark} />
          <p className="text-light-m">{companyDescription}</p>
        </section>

        <section className={styles.linksGroups}>
          {linksGroups.map(({ title, links }) => (
            <LinkGroup key={title} title={title} links={links} />
          ))}
        </section>
      </div>

      <p className={styles.rights}>{copyrightDescription}</p>
    </footer>
  );
});
