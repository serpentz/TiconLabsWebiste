import {MAIL_SERVER_SEND_RECEPIENT, MAIL_SERVER_SEND_TICON,  MAIL_SERVER_API_BASE} from '../constants'

function sendMailToRecipeint(body){
    let options = {
        method: "POST",
        body,
        headers: {
            "Content-Type": "application/json"
            }
        }
    fetch(MAIL_SERVER_SEND_RECEPIENT,options)
}


function sendMailToTicon(body){
    let options = {
        method: "POST",
        body,
        headers: {
            "Content-Type": "application/json"
            }
        }
    fetch(MAIL_SERVER_SEND_TICON,options)
}

function sendTestEmail(body){
    let options = {
        method: "POST",
        body,
        headers: {
            "Content-Type": "application/json"
            }
        }
    fetch(MAIL_SERVER_API_BASE + "/send",options)
}



export {
    sendMailToRecipeint,
    sendMailToTicon
}