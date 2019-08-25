import React from "react"
import {Map,ContactForm} from "../../components"



function Container() {
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
                                    <input type="text" placeholder="enter your name" required="" />
                                    <div className="input-bottom-line"></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label className="required-input">E-MAIL</label>
                                <div className="input-container">
                                    <input type="email" placeholder="enter your email" required="" />
                                    <div className="input-bottom-line"></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label className="required-input">PHONE</label>
                                <div className="input-container">
                                    <input type="text" placeholder="(00) 123 456 789" required="" />
                                    <div className="input-bottom-line"></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <label className="required-input">SUBJECT</label>
                                <div className="input-container">
                                    <input type="text" placeholder="subject" required="" />
                                    <div className="input-bottom-line"></div>
                                </div>
                            </div>
                        </div>
                        <label className="required-input">MESSAGE</label>
                        <div className="input-container">
                            <textarea placeholder="enter your text"></textarea>
                            <div className="input-bottom-line"></div>
                        </div>
                        <input type="submit" value="Send Message" className="button-style-1 pull-right" />
                        <ContactForm />
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

export default Container