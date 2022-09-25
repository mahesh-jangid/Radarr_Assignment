import {
  BOOKS_REQUEST,
  BOOKS_SUCCESS,
  BOOKS_FAIL,
  CHARACTER_REQUEST,
  CHARACTER_SUCCESS,
  CHARACTER_FAIL,
} from "./Action.type";

const InitialState = {
  Loading: true,
  Books: [],
  Character: [],
  Error: false,
};

export const BooksReducers = (state = InitialState, { type, payload }) => {
  switch (type) {
    case BOOKS_REQUEST:
      return {
        ...state,
        Loading: true,
      };
    case BOOKS_SUCCESS:
      return {
        ...state,
        Loading: false,
        Books: payload,
      };

    case BOOKS_FAIL:
      return {
        ...state,
        Loading: false,
        Error: true,
      };
    default:
      return state;
  }
};
export const CharacterReducers = (state = InitialState, { type, payload }) => {
  switch (type) {
    case CHARACTER_REQUEST:
      return {
        ...state,
        Loading: true,
      };
    case CHARACTER_SUCCESS:
      return {
        ...state,
        Loading: false,
        Character: payload,
      };

    case CHARACTER_FAIL:
      return {
        ...state,
        Loading: false,
        Error: true,
      };
    default:
      return state;
  }
};
