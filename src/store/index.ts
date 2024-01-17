import { configureStore, combineReducers } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import { listenerMiddleware } from './middleware';

const themeState = JSON.parse(localStorage.getItem('theme') ?? '{ "isLightTheme": false }');

const rootReducer = combineReducers({
  theme: themeReducer,
});

export const store = configureStore({
  preloadedState: {
    theme: themeState,
  },
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware().prepend(listenerMiddleware.middleware);

    return middleware;
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
