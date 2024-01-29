import { memo, useMemo } from 'react';

import { CompanyMark } from '@/components/CompanyMark';

import { FOOTER_LINKS_GROUPS } from './constants';
import LinkGroup from './LinkGroup';

import styles from './Footer.module.scss';

function Footer() {
  const linksGroups = useMemo(() => FOOTER_LINKS_GROUPS, []);

  return (
    <footer className={`container ${styles.footer}`}>
      <div className={styles.wrapper}>
        <section className={styles.companyInfo}>
          <CompanyMark className={styles.mark} />
          <p className="text-light-m">
            Since then, the company has grown organically to. Starsup is the world&apos;s largest
            trading platform, with $12 billion worth of currency trading and 500,000 tickets sold
            daily to tens of thousands of traders worldwide.
          </p>
        </section>

        <section className={styles.linksGroups}>
          {linksGroups.map(({ title, links }) => (
            <LinkGroup key={title} title={title} links={links} />
          ))}
        </section>
      </div>

      <p className={styles.rights}>Startsup © 2023-2024, All Rights Reserved</p>
    </footer>
  );
}

export default memo(Footer);
