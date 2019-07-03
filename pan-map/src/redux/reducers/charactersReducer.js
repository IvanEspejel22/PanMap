import {
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR
} from "../actions/types";

const charactersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_SUCCESS:
      return action.payload;
    case FETCH_CHARACTERS_ERROR:
      return { ...state, err: action.payload }
    default:
      return state
  }
}

export default charactersReducer;