import {REDUX} from '../../constants'


let toggle  = (type,bool) => {
    switch(type){
        case "email":
            return { type: REDUX.MODAL.EMAIL, bool } 
        default:
            return null
    }
}


export default {
    toggle
}