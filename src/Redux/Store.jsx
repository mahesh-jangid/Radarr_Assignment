import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";

import thunk from "redux-thunk";

import { BooksReducers } from "./Reducer";
import { CharacterReducers } from "./Reducer";

const reducer = combineReducers({
  Books: BooksReducers,
  Characters: CharacterReducers,
});

const composeEnhancer = compose;
const store = legacy_createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
