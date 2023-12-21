import {combineReducers, configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import userSlice from './reducers/User';
import categoriesSlice from './reducers/Categories';
import Donations from './reducers/Donations';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  categories: categoriesSlice.reducer,
  donations: Donations.reducer,
});

const Store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(logger);
  },
});

export default Store;
