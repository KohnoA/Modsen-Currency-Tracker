import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';

import { changeTheme } from './slices/themeSlice';
import type { RootState } from '.';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(changeTheme),

  effect: (_, listenerApi) => {
    localStorage.setItem('theme', JSON.stringify((listenerApi.getState() as RootState).theme));
  },
});
