import {REDUX} from '../../constants'

const initialState = {
    response: {},
    isFetching: false,
    isError: false,
    isSuccess: false
  };
  
  const reducer = (oldState = initialState, action) => {
    switch(action.type) {
        case REDUX.EMAIL.SENDING:
            return {...oldState, isFetching: true}

        case REDUX.EMAIL.SENT:
            var newState = Object.assign({}, oldState)
                newState.isError = false
                newState.isFetching =  true
                newState.isSuccess = true
                newState.response = action.payload
            return newState
        case REDUX.EMAIL.ERROR:
            return {
                    isFetching: false,
                    isError: true,
                    isSuccess: false,
                    response: action.payload
                }
        default:
            return oldState
    }
  };
  
  export default reducer;