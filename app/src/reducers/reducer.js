
const initialState = {
  dogImg: '',
  isFetching: false,
  dogBreed: '',
  error: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type){
    case ('FETCH_BREED_START'):
      return({
        ...state,
        isFetching: true,
        error: '',
        dogBreed:'',
        dogImg:''
      })
    case ('FETCHH_BREED_SUCCESS'):
      return({
        ...state,
        isFetching: false,
        dogBreed: action.payload,
        dogImg: action.payload,
        error: ''
      })
     case ('FETCH_QUOTE_FAIL'):
       return({
         ...state,
         isFetching: false,
         error: action.payload
       }) 
     default:
       return state;  
  }
}