import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useAppSelector } from '@/store/hooks';
import { selectTheme } from '@/store/selectors';
import styles from './styles.module.scss';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const isLightTheme = useAppSelector(selectTheme);

  return (
    <div data-testid="layout" className={`${styles.layout} ${isLightTheme ? 'lightTheme' : ''}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
