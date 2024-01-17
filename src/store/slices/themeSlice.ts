import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  isLightTheme: boolean;
};

const initialState: InitialStateType = {
  isLightTheme: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state) {
      state.isLightTheme = !state.isLightTheme;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
