import axios from "axios";
import { GET_ERRORS, GET_BUILDINGS_EMPTY, GET_BUILDINGS_TYPE, UPDATE_BUILDING } from "./types";

export const createBuilding = (history) => async dispatch => {
  try {
    await axios.post("http://localhost:8080/building/init");
    history.push("/dashboard");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const updateBuilding = () => async dispatch => {
  const res = await axios.post("http://localhost:8080/building/update");
  dispatch({
    type: GET_BUILDINGS_EMPTY,
    payload: res.data
  });
}

export const getEmptyBuilding = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/building/empty");
  dispatch({
    type: GET_BUILDINGS_EMPTY,
    payload: res.data
  });
};

export const getByType = (id, history) => async dispatch => {
  try {
    const res = await axios.get(
      `http://localhost:8080/building/type/${id}`
    );
    dispatch({
      type: GET_BUILDINGS_TYPE,
      payload: res.data
    });
  } catch (error) {
    history.push("/dashboard");
  }
};
