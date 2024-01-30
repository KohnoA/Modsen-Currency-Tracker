import { ReactNode } from 'react';

import { useAppSelector } from '@/store/hooks';
import { selectTheme } from '@/store/selectors';

import { Footer } from './Footer';
import { Header } from './Header';

import styles from './styles.module.scss';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const isLightTheme = useAppSelector(selectTheme);

  return (
    <div data-testid="layout" className={`${styles.layout} ${isLightTheme ? 'lightTheme' : ''}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
