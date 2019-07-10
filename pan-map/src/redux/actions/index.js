import { FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_ERROR, FETCH_SINGLE_CHARACTER_SUCCESS, FETCH_SINGLE_CHARACTER_ERROR } from './types'
import axios from 'axios'


const BASE_URL = 'http://localhost:3000/resenas'

// charactersReducer
export const fetchCharactersSuccess = characters => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: characters
})

export const fetchCharactersError = err => ({
  type: FETCH_CHARACTERS_ERROR,
  payload: err,
  error: true
});

export const fetchCharactersAsync = (url=BASE_URL) => {
  return async dispatch => {
    try {
      const res = await axios.get(url)
      console.log('response: ', res.data)
      dispatch(fetchCharactersSuccess(res.data))
    } catch(err) {
      dispatch(fetchCharactersError(err))
    }
  }
}

