import { combineReducers } from "redux";
import changePageNumber from "./changePageNumberReducer";

export default combineReducers({
  changePageNumber: changePageNumber,
});
