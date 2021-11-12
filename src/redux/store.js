import { configureStore } from '@reduxjs/toolkit';

import phonebookReducer from './phonebook/phonebook-reducer';
import { pokemonApi } from './test';
import { contactsApi } from './contactsSlice';

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    pokemonApi.middleware,
    contactsApi.middleware,
  ],

  devTools: process.env.NODE_ENV === 'development',
});

export default store;
