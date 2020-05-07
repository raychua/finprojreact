import { createStore, combineReducers } from "redux";
import reducer from "./Reducer";

const reducers = combineReducers({
  reducer: reducer,
});

export default createStore(reducers);
