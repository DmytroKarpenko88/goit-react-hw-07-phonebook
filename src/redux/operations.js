import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   fetchingError,
//   fetchingInProgress,
//   fetchingSuccess,
// } from './contactsSlice';

axios.defaults.baseURL = 'https://64816b3929fa1c5c50315afb.mockapi.io';

// export const fetchContacts = () => async dispatch => {
//   try {
//     // Індикатор завантаження
//     dispatch(fetchingInProgress());
//     // HTTP-запит
//     const responce = await axios.get('/contacts');
//     // Обробка даних
//     dispatch(fetchingSuccess(responce.data));
//   } catch (e) {
//     // Обробка помилки
//     dispatch(fetchingError(e.message));
//   }
// };

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// reducers: {
//   addContact: {
//     reducer(state, action) {
//       state.items.push(action.payload);
//     },
//   },

//   deleteContact: {
//     reducer(state, action) {
//       const index = state.items.findIndex(
//         contact => contact.id === action.payload
//       );
//       state.items.splice(index, 1);
//     },
//   },

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', user);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
