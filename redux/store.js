import {combineReducers, configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import userSlice from './reducers/User';

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

const Store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(logger);
  },
});

export default Store;
