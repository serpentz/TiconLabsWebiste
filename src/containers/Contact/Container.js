import React from "react"
import {Map} from "../../components"



function Container() {
    return (

        <body>


            <header class="page">


                <div class="container text-center">
                    <h2>Contact Us</h2>
                    <p class="page-subtitle">
                        Creative thinking inspires ideas. Ideas inspire change.
                </p>
                </div>
            </header>

            <main>

                <div class="container">

                    <div class="contact-widget homepage-widget box-shadow-1 clearfix pushtop-100">
                        <p class="pretitle">CONTACT US</p>
                        <h3>Get in touch with us</h3>
                        <div class="row">
                            <div class="col-md-3">
                                <label class="required-input">NAME</label>
                                <div class="input-container">
                                    <input type="text" placeholder="enter your name" required="" />
                                    <div class="input-bottom-line"></div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label class="required-input">E-MAIL</label>
                                <div class="input-container">
                                    <input type="email" placeholder="enter your email" required="" />
                                    <div class="input-bottom-line"></div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label class="required-input">PHONE</label>
                                <div class="input-container">
                                    <input type="text" placeholder="(00) 123 456 789" required="" />
                                    <div class="input-bottom-line"></div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label class="required-input">SUBJECT</label>
                                <div class="input-container">
                                    <input type="text" placeholder="subject" required="" />
                                    <div class="input-bottom-line"></div>
                                </div>
                            </div>
                        </div>
                        <label class="required-input">MESSAGE</label>
                        <div class="input-container">
                            <textarea placeholder="enter your text"></textarea>
                            <div class="input-bottom-line"></div>
                        </div>
                        <input type="submit" value="Send Message" class="button-style-1 pull-right" />
                    </div>
                </div>

                <div id="googleMap" style={{ position: "relative", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: "100%", position: "absolute", top: "0px", left: "0px", "background-color": "rgb(229, 227, 223)" }}>
                        <div class="gm-err-container">
                            <div class="gm-err-content">
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