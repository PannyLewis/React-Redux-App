import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
  isFetching: false,
  fetchError: null,
  quotes: [], // need an empty array so that the .map has somewhere to place its new array
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: null,
        quotes: [],
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        quotes: action.payload,
      };

    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        quotes: [],
      };
    default:
      return state;
  }
};
