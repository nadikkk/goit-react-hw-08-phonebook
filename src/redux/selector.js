export const selectorFilter = state => state.filter.filter;
export const selectorContact = state => state.contact.contacts.items;
export const selectorContactLoader = state => state.contact.contacts.isLoading;
export const selectorUser = state => state.user.user;
export const selectorUserToken = state => state.user.token;
export const selectorUserLoggedinIn = state => state.user.isLoggedIn;
export const selectorUserRefreshing = state => state.user.isRefreshing;
export const selectorUserLoading = state => state.user.isLoading;