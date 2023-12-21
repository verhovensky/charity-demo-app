import {createSlice} from '@reduxjs/toolkit';
import initialCategories from './CategoriesList';

const initialState = {
  categories: initialCategories,
  selectedCategoryId: 1,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {...initialState},
  reducers: {
    resetCategories: () => {
      return initialState;
    },
    updateSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const {resetCategories, updateSelectedCategoryId} =
  categoriesSlice.actions;
export default categoriesSlice;
// Could have been: export default categoriesSlice.reducer;
