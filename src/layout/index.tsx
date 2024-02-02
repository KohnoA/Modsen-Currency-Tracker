import { ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

import styles from './styles.module.scss';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div data-testid="layout" className={styles.layout}>
    <Header />
    {children}
    <Footer />
  </div>
);
