import { useLayoutEffect, useState } from 'react';

import { AppTheme } from '@/constants';

const LOCAL_STORAGE_THEME_KEY = 'currency-tracker-theme';
const ATTR_KEY = 'data-theme';

export function useTheme() {
  const [theme, setTheme] = useState<AppTheme>(() => {
    const themeInCache = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

    if (!themeInCache) localStorage.setItem(LOCAL_STORAGE_THEME_KEY, AppTheme.DARK);

    return localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as AppTheme;
  });

  const toggleTheme = () => {
    setTheme(theme === AppTheme.DARK ? AppTheme.LIGHT : AppTheme.DARK);
  };

  useLayoutEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    document.documentElement.setAttribute(ATTR_KEY, theme);
  }, [theme]);

  return { theme, toggleTheme };
}
