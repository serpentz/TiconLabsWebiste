import {
    MAIL_SERVER_SEND_RECIPIENT,
    MAIL_SERVER_SEND_TICON,
    MAIL_SERVER_API_BASE,
    REDUX
} from '../../constants'
import Modal from '../actions/modal'

function sendMailToRecipeint(body) {
    return async dispatch => {
        let options = {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        dispatch({ type: REDUX.EMAIL.SENDING })
        const res = await fetch(MAIL_SERVER_SEND_RECIPIENT, options)
        const response = await res.json()

        if (response.error) {
            dispatch({ type: REDUX.EMAIL.ERROR, payload: response })
        } else {
            dispatch({ type: REDUX.EMAIL.SENT, payload: response })
            dispatch({type: REDUX.EMAIL.FORM.CLEAR})
        }

        dispatch(Modal.toggle('email', true))
    }
}

function sendMailToTicon(body) {
    return async dispatch => {
        let options = {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        dispatch({ type: REDUX.EMAIL.SENDING })
        const res = await fetch(MAIL_SERVER_SEND_TICON, options)
        const response = await res.json()
        if (response.error) {
            dispatch({ type: REDUX.EMAIL.ERROR, payload: response })
        } else {
            dispatch({ type: REDUX.EMAIL.SENT, payload: response })
        }
    }
}

function sendTestEmail(body) {
    return async dispatch => {
        let options = {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        dispatch({ type: REDUX.EMAIL.SENDING })
        const res = await fetch(MAIL_SERVER_API_BASE + '/send', options)
        const response = await res.json()
        if (response.error) {
            dispatch({ type: REDUX.EMAIL.ERROR, payload: response })
        } else {
            dispatch({ type: REDUX.EMAIL.SENT, payload: response })
        }
    }
}

function updateForm(e) {
    return {
        type: REDUX.EMAIL.FORM.UPDATE,
        payload: {
            field: e.target.id,
            value: e.target.value
        }
    }
}

function clearForm() {
    return {
        type: REDUX.EMAIL.FORM.CLEAR
    }
}

export default {
    sendMailToRecipeint,
    sendMailToTicon,
    updateForm,
    clearForm
}
