import {createSlice} from '@reduxjs/toolkit';
import initialDonations from './DonationsList';

const initialState = {
  donations: initialDonations,
  selectedDonationId: null,
};

const donationsSlice = createSlice({
  name: 'donations',
  initialState: {...initialState},
  reducers: {
    resetDonations: () => {
      return initialState;
    },
    updateSelectedDonationId: (state, action) => {
      state.selectedDonationId = action.payload;
    },
  },
});

export const {resetDonations, updateSelectedDonationId} =
  donationsSlice.actions;
export default donationsSlice;
// Could have been: export default categoriesSlice.reducer;
