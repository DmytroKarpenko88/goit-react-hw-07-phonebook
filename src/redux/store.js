import { configureStore } from '@reduxjs/toolkit';
import { isActiveSlice } from './isActiveSlice';
import { filterSlice } from './filterSlice';

import { contactsSlice } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    isActive: isActiveSlice.reducer,
    filter: filterSlice.reducer,
  },
});
