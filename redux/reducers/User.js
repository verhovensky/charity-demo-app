import {createSlice} from '@reduxjs/toolkit';

const defaultUserInitialState = {
  isLoggedIn: false,
  profileImage:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

export const userSlice = createSlice({
  name: 'user', // REQUIRED property of slice inside store
  nickname: 'Default username',
  initialState: {
    ...defaultUserInitialState,
  },
  reducers: {
    logIn: (state, action) => {
      return {
        ...state,
        ...{isLoggedIn: true},
        ...action.payload,
      };
    },
    resetToInitialState: () => {
      return defaultUserInitialState;
    },
  },
});

export const {resetToInitialState, logIn} = userSlice.actions;
export default userSlice;
// Could have been: export default userSlice.reducer;
