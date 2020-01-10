import * as actionTypes from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROJECTS:
      let tempState = JSON.parse(JSON.stringify(state));
      tempState = action.payload;
      return [...tempState];
    default:
      return state;
  }
};

export default reducer;
