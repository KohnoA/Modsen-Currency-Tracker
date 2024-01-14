import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { themeSlice } from './slices/themeSlice';

const rootReducer = combineReducers({
  [themeSlice.name]: themeSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
