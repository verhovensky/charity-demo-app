import {createSlice} from '@reduxjs/toolkit';

const defaultUserInitialState = {
  id: 999999, // for testing?
  firstName: 'Peter',
  lastName: 'Verhovensky',
  nickname: 'Not set',
  email: 'Not set',
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
    setNickname: (state, action) => {
      state.nickname = action.payload.nickname;
    },
    setEmail: (state, action) => {
      state.email = action.payload.email;
    },
    resetToInitialState: () => {
      return defaultUserInitialState;
    },
  },
});

export const {setNickname, setEmail, resetToInitialState} = userSlice.actions;
export default userSlice;
// Could have been: export default userSlice.reducer;
