import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import './styles.scss';
import { useAppSelector } from '@/store/hooks';
import { selectTheme } from '@/store/selectors';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const isLightTheme = useAppSelector(selectTheme);

  return (
    <div className={`layout ${isLightTheme ? 'light' : ''}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
