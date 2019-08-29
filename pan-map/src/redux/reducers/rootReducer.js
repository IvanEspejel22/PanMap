import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import charactersReducer from './charactersReducer';

export default combineReducers({
  characters: charactersReducer,
  form: formReducer     // <---- Mounted at 'form'
})