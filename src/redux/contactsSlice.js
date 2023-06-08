import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
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

  // // Виконається в момент старту HTTP-запиту
  // fetchingInProgress(state) {
  //   state.isLoading = true;
  // },
  // // Виконається якщо HTTP-запит завершився успішно
  // fetchingSuccess(state, action) {
  //   state.isLoading = false;
  //   state.error = null;
  //   state.items = action.payload;
  // },
  // // Виконається якщо HTTP-запит завершився з помилкою
  // fetchingError(state, action) {
  //   state.isLoading = false;
  //   state.error = action.payload;
  // },

  // findContact: {
  //   reducer(state, action) {
  //     state.filter = action.payload;
  //   },
  // },
  // },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const {
//   addContact,
//   deleteContact,
//   // fetchingInProgress,
//   // fetchingSuccess,
//   // fetchingError,
//   // findContact
// } = contactSlice.actions;
