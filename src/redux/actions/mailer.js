import {
    MAIL_SERVER_SEND_RECIPIENT,
    MAIL_SERVER_SEND_TICON,
    MAIL_SERVER_API_BASE,
    REDUX
} from '../../constants'


function sendMailToRecipeint(body) {
    return async (dispatch) => {

        let options = {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        dispatch({type: REDUX.EMAIL.SENDING })
        const res = await fetch(MAIL_SERVER_SEND_RECIPIENT, options)
        const response = await res.json()
        if (response.error) {
            dispatch({ type: REDUX.EMAIL.ERROR, payload: response });
        }
        else {
            dispatch({ type: REDUX.EMAIL.SENT, payload: response });
        }

    }
}

function sendMailToTicon(body) {
    return async (dispatch) => {

        let options = {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        dispatch({type: REDUX.EMAIL.SENDING })
        const res = await fetch(MAIL_SERVER_SEND_TICON, options)
        const response = await res.json()
        if (response.error) {
            dispatch({ type: REDUX.EMAIL.ERROR, payload: response });
        }
        else {
            dispatch({ type: REDUX.EMAIL.SENT, payload: response });
        }

    }
}

function sendTestEmail(body) {
    return async (dispatch) => {

        let options = {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        dispatch({type: REDUX.EMAIL.SENDING })
        const res = await fetch(MAIL_SERVER_API_BASE + '/send', options)
        const response = await res.json()
        if (response.error) {
            dispatch({ type: REDUX.EMAIL.ERROR, payload: response });
        }
        else {
            dispatch({ type: REDUX.EMAIL.SENT, payload: response });
        }

    }
}

export {
    sendMailToRecipeint,
    sendMailToTicon
}
