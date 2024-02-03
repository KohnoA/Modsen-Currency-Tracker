import { useLayoutEffect, useState } from 'react';

import { AppThemes } from '@/constants';

const LOCAL_STORAGE_THEME_KEY = 'currency-tracker-theme';
const ATTR_KEY = 'data-theme';

export function useTheme() {
  const [theme, setTheme] = useState<AppThemes>(() => {
    const themeInCache = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

    if (!themeInCache) localStorage.setItem(LOCAL_STORAGE_THEME_KEY, AppThemes.DARK);

    return localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as AppThemes;
  });

  const toggleTheme = () => {
    setTheme(theme === AppThemes.DARK ? AppThemes.LIGHT : AppThemes.DARK);
  };

  useLayoutEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    document.documentElement.setAttribute(ATTR_KEY, theme);
  }, [theme]);

  return { theme, toggleTheme };
}
