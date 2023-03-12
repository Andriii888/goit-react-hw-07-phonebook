import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filtersReducer } from './filterSlice';
import { numbersReducer } from './numberSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  version:1,
  blacklist: ['filters'],
};
const rootReducer = combineReducers({
  numbers: numbersReducer,
  filters: filtersReducer,
});
const numberPersistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: numberPersistedReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);
