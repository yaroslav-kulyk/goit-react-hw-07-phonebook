import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('phonebook/addContact', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction('phonebook/deleteContact');

const changeFilter = createAction('phonebook/changeFilter');

export { addContact, deleteContact, changeFilter };
