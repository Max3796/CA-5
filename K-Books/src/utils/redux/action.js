import { FETCHING, SEARCH, STORE_FORM_DATA } from "./actionType";

export const fetchData = (books) => {
  return {
    type: FETCHING,
    payload: books,
  };
};

export const searchBooks = (searchedBook) => {
  return {
    type: SEARCH,
    payload: searchedBook,
  };
};

export const storeFormData = (data) => {
  console.log(data);
  return {
    type: STORE_FORM_DATA,
    payload: data,
  };
};
