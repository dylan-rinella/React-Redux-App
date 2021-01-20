import { FETCH_DOG_SUCCESS, FETCH_DOG_START, FETCH_DOG_FAIL } from '../actions/getDog'


const initialState = {
  dogImg: '',
  isFetching: false,
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type){
    case ('FETCH_DOG_START'):
      return({
        ...state,
        isFetching: true,
        error: '',
        dogImg:''
      })
    case ('FETCH_DOG_SUCCESS'):
      return({
        ...state,
        isFetching: false,
        dogImg: action.payload,
        error: ''
      })
     case ('FETCH_DOG_FAIL'):
       return({
         ...state,
         isFetching: false,
         error: action.payload
       }) 
     default:
       return state;  
  }
}