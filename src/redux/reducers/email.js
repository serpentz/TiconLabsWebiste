import {REDUX} from '../../constants'

const initialState = {
    response: {},
    form: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    },
    isFetching: false,
    isError: false,
    isSuccess: false
  };
  
  const reducer = (oldState = initialState, action) => {
    var newState = Object.assign({}, oldState)
    switch(action.type) {
        case REDUX.EMAIL.FORM.UPDATE:
            newState.form[action.payload.field] =  action.payload.value
            return newState
        case REDUX.EMAIL.FORM.CLEAR:
            newState.form = {
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            }
            return newState
        case REDUX.EMAIL.SENDING:
            return {...oldState, isFetching: true}
        case REDUX.EMAIL.SENT:
                newState.isError = false
                newState.isFetching =  false
                newState.isSuccess = true
                newState.response = action.payload
            return newState
        case REDUX.EMAIL.ERROR:
                newState.isError = true
                newState.isFetching =  false
                newState.isSuccess = false
                newState.response = action.payload
            return newState
        default:
            return oldState
    }
  };
  
  export default reducer;