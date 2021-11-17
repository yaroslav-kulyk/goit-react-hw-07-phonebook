import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './phonebook/phonebook-reducer';
import { contactsApi } from './contactsSlice';

const store = configureStore({
  reducer: {
    contacts: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],

  devTools: process.env.NODE_ENV === 'development',
});

export default store;
