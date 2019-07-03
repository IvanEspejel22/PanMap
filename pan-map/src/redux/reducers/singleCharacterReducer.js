import { FETCH_SINGLE_CHARACTER_SUCCESS, FETCH_SINGLE_CHARACTER_ERROR } from "../actions/types";

const singleCharacterReducer = (state = '', action) => {
  switch (action.type) {
    case FETCH_SINGLE_CHARACTER_SUCCESS:
      return action.payload;
    case FETCH_SINGLE_CHARACTER_ERROR:
      return { ...state, err: action.payload };
    default:
      return state;
  }
};

export default singleCharacterReducer;