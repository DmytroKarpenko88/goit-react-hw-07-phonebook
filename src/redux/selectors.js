export const getContacts = state => state.contacts;
// export const getFilter = state => state.contacts.filter;
export const getFilter = state => state.filter.filter;
export const getActive = state => state.isActive;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
