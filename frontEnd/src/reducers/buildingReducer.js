import { GET_BUILDINGS_EMPTY, GET_BUILDINGS_TYPE } from "../actions/types";

const initialState = {
  buildings: [],
  building: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BUILDINGS_EMPTY:
      return {
        ...state,
        buildings: action.payload
      };

    case GET_BUILDINGS_TYPE:
      return {
        ...state,
        buildings: action.payload
      };

    default:
      return state;
  }
}
