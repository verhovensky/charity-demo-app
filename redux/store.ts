import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import userSlice from './reducers/User';
import categoriesSlice from './reducers/Categories';
import Donations from './reducers/Donations';
import {reduxStorage} from '../storage/storage';

const rootReducer = combineReducers({
  user: userSlice.reducer,
  categories: categoriesSlice.reducer,
  donations: Donations.reducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: reduxStorage,
  timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(Store);

export const useAppDispatch = () => useDispatch();
export type RootState = ReturnType<any>;
