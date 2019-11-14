import React from "react"
import { Map, Email as EmailModal } from "../../components"
import { Mailer, Modal } from '../../redux/actions'
// import {sendMailToRecipeint} from '../../redux/actions'
import { connect } from 'react-redux'




const Container = (props) => {

    const onClick = (e) => {
        e.preventDefault()
        let body = JSON.stringify(getBody())
        
        props.dispatch(Mailer.sendMailToRecipeint(body))
        props.dispatch(Mailer.sendMailToTicon(body))
        setTimeout(() => props.dispatch(Modal.toggle("email",false)),2500)
    }

    function getBody() {
        let name = props.form.name
        let email = props.form.email
        let phone = props.form.phone
        let subject = props.form.subject
        let message = props.form.message

        let text = `
            name : ${name}
            email : ${email}
            phone : ${phone}
            subject : ${subject}
            message : ${message}
        `

        return {
            email: {
                "from": "'Ticon Mail server 👻' <mailserver_ticonlabs@gmail.com>",
                "to": email,
                "subject": subject,
                "text": text,
                "html": "<b><h1>Hello world?</h1></b>"
            }
        }
    }

    const onChangeHandler = (e) => {
        props.dispatch(Mailer.updateForm(e))
    }



    return (

        <body>


            <header className="page">


                <div className="container text-center">
                    <h2>Contact Us</h2>
                    <p className="page-subtitle">
                        Creative thinking inspires ideas. Ideas inspire change.
                </p>
                </div>
            </header>

            <main>

                <div className="container">

                    <div className="contact-widget homepage-widget box-shadow-1 clearfix pushtop-100">
                        <p className="pretitle">CONTACT US</p>
                        <h3>Get in touch with us</h3>
                        <div className="row">
                            <div className="col-md-3">
                                <label className="required-input">NAME</label>
                                <div className="input-container">
                                    <input onChange={onChangeHandler} id="name" type="text" placeholder="enter your name" value={props.form.name}  required="" />
                                    <div className="input-bottom-line"></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label className="required-input">E-MAIL</label>
                                <div className="input-container">
                                    <input onChange={onChangeHandler} id="email" type="email" placeholder="enter your email" value={props.form.email} required="" />
                                    <div className="input-bottom-line"></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label className="required-input">PHONE</label>
                                <div className="input-container">
                                    <input onChange={onChangeHandler} id="phone" type="text" placeholder="(00) 123 456 789" value={props.form.phone}  required="" />
                                    <div className="input-bottom-line"></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label className="required-input">SUBJECT</label>
                                <div className="input-container">
                                    <input onChange={onChangeHandler} id="subject" type="text" placeholder="subject"value={props.form.subject}  required="" />
                                    <div className="input-bottom-line"></div>
                                </div>
                            </div>
                        </div>
                        <label className="required-input">MESSAGE</label>
                        <div className="input-container">
                            <textarea  onChange={onChangeHandler} id="message" value={props.form.message} placeholder="enter your text"></textarea>
                            <div className="input-bottom-line"></div>
                        </div>
                        <input type="submit" disabled={props.isFetching} onClick={onClick} value="Send Message" className="button-style-1 pull-right" />
                        <EmailModal />
                    </div>

                </div>

                <div id="googleMap" style={{ position: "relative", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: "100%", position: "absolute", top: "0px", left: "0px", backgroundColor: "rgb(229, 227, 223)" }}>
                        <div className="gm-err-container">
                            <div className="gm-err-content">
                                <Map />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </body>
    )
}

const mapStateToProps = state => {
    return {
        isError: state.email.isError,
        isSuccess: state.email.isSuccess,
        response: state.email.response,
        isFetching: state.email.isFetching,
        form: {
           name: state.email.form.name,
           email: state.email.form.email,
           phone: state.email.form.phone,
           subject: state.email.form.subject,
           message: state.email.form.message,
        }
    };
};


// let sendMailToRecipeint = Mailer.sendTestEmai

export default connect(mapStateToProps)(Container)