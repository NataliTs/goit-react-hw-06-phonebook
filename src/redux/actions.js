import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/AddContact');

export const setFilter = createAction('filters/SetFilter');

export const getVisibleContacts = createAction('filters/GetVisibleContacts');

export const deleteContact = createAction('contacts/DeleteContact');
