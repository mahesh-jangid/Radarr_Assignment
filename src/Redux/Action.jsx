import Axios from "axios";

import {
  BOOKS_REQUEST,
  BOOKS_SUCCESS,
  BOOKS_FAIL,
  CHARACTER_REQUEST,
  CHARACTER_SUCCESS,
  CHARACTER_FAIL,
} from "./Action.type";

export const fetchBooks = (URL) => {
  return (dispatch) => {
    dispatch({ type: BOOKS_REQUEST });
    Axios.get(URL)
      .then((response) => {
        // console.log(response);
        dispatch({ type: BOOKS_SUCCESS, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: BOOKS_FAIL, payload: err.message });
      });
  };
};
export const fetchCharacter = (URL) => {
  return (dispatch) => {
    dispatch({ type: CHARACTER_REQUEST });
    Axios.get(URL)
      .then((response) => {
        dispatch({ type: CHARACTER_SUCCESS, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: CHARACTER_FAIL, payload: err.message });
      });
  };
};
