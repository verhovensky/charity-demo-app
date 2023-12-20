import {createSlice} from '@reduxjs/toolkit';

const defaultUserInitialState = {
  id: 999999, // for testing?
  firstName: 'Not set',
  lastName: 'Not set',
  nickname: 'Not set',
  email: 'Not set',
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
  },
});

export const {setNickname, setEmail} = userSlice.actions;
export default userSlice;
// Could have been: export default userSlice.reducer;
