const MAIL_SERVER_API_BASE = "https://ticonlab-email.appspot.com"
// const MAIL_SERVER_API_BASE = "http://localhost:3030"
const MAIL_SERVER_SEND_TICON = MAIL_SERVER_API_BASE + "/send/ticon"
const MAIL_SERVER_SEND_RECIPIENT = MAIL_SERVER_API_BASE + "/send/recipient"

const REDUX = {
    EMAIL: {
        SENT: "SENT_EMAIL",
        SENDING: "SENDING_EMAIL",
        ERROR: "SENDING_EMAIL_ERROR",
        FORM: {
            UPDATE: "EMAIL_FORM_UPDATE",
            CLEAR: "EMAIL_FORM_CLEAR"
        }

    },
    MODAL: {
        EMAIL: "MODAL_EMAIL"
    }
}

export {
    MAIL_SERVER_API_BASE,
    MAIL_SERVER_SEND_TICON,
    MAIL_SERVER_SEND_RECIPIENT,
    REDUX
}