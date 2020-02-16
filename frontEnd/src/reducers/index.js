import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";
import buildingReducer from "./buildingReducer";

export default combineReducers({
  errors: errorReducer,
  project: projectReducer,
  building: buildingReducer
});
