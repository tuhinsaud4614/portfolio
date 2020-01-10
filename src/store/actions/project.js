import axios from "axios";
import * as actionTypes from "./actionTypes";

export const fetchProjects = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        "https://react-portfolio-1a7f5.firebaseio.com/projects.json"
      );
      dispatch({
        type: actionTypes.FETCH_PROJECTS,
        payload: [...response.data]
      });
    } catch (err) {
      console.log(err);
    }
  };
};
