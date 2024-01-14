import { configureStore, combineReducers } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import { listenerMiddleware } from './middleware';

const themeState = JSON.parse(localStorage.getItem('theme') ?? 'false');

const rootReducer = combineReducers({
  theme: themeReducer,
});

export const store = configureStore({
  preloadedState: {
    theme: themeState,
  },
  reducer: rootReducer,

  middleware: (getDefMiddleware) => getDefMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
