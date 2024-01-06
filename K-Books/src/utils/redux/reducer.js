//^Reducer for implenting functionality of Redux Store
const initialState = {
  books: [],
  searchedBook: "",
  formData: {}
};

export const reducer = (storeData = initialState, action) => {
  switch (action.type) {
    case "FETCHING":
      return {
        ...storeData,
        books: action.payload,
      };
    case "SEARCH":
      return {
        ...storeData,
        searchedBook: action.payload,
      };
    case "STORE_FORM_DATA":
      return {
        ...storeData,
        formData: action.payload,
      };
    default:
      return storeData;
  }
};
