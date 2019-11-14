import {REDUX} from '../../constants'

const initialState = {
    email: false
  };
  
  const reducer = (oldState = initialState, action) => {
            
    switch(action.type){
      case REDUX.MODAL.EMAIL : 
          let newState = Object.assign({}, oldState)
          newState.email = action.bool
          return newState
        default: 
          return oldState;
    }
  };
  
  export default reducer;