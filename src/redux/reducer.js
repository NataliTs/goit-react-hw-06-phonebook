import { createAction, createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  setFilter,
  getVisibleContacts,
  deleteContact,
} from './actions';
import { initialContacts } from '../components/App';

const initialFilter = '';

export const contactsReducer = createReducer(initialContacts, {
  [addContact]: (state, action) => {
    state.contacts = [...state.contacts, action.payload];
  },
  [deleteContact]: (state, action) => {
    state.contacts = state.contacts.filter(
      contact => contact.id !== action.payload
    );
  },
});

export const filterReducer = createReducer(initialFilter, {
  [setFilter]: (state, action) => {
    state.filter = action.payload;
  },
});
