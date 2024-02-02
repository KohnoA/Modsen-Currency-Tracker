import { ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
