import React from 'react'
// let NodeMailer = require('nodemailer')


// async function main() {
//     // Generate test SMTP service account from ethereal.email
//     // Only needed if you don't have a real mail account for testing
//     let testAccount = await NodeMailer.createTestAccount();

//     // create reusable transporter object using the default SMTP transport
//     let transporter = NodeMailer.createTransport({
//         host: 'smtp.ethereal.email',
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//             user: testAccount.user, // generated ethereal user
//             pass: testAccount.pass // generated ethereal password
//         }
//     });

//     // send mail with defined transport object
//     let info = await transporter.sendMail({
//         from: '"Fred Foo 👻" <foo@example.com>', // sender address
//         to: 'bar@example.com, baz@example.com', // list of receivers
//         subject: 'Hello ✔', // Subject line
//         text: 'Hello world?', // plain text body
//         html: '<b>Hello world?</b>' // html body
//     });

//     console.log('Message sent: %s', info.messageId);
//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//     // Preview only available when sending through an Ethereal account
//     console.log('Preview URL: %s', NodeMailer.getTestMessageUrl(info));
//     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }




function Component() {

    function sendTestEmail(){
        let body = JSON.stringify({email:{
            "from": "'Mail server 👻' <mailserver_ticonlabs@gmail.com>", 
            "to": "abyicherinet@gmail.com", 
            "subject": "Test", 
            "text": "test?", 
            "html": "<b><h1>Hello world?</h1></b>"
        }})
        let options = {method: "POST", body, headers: {"Content-Type": "application/json","Access-Control-Allow-Origin": "*"}}
        fetch("http://localhost:3030/send", options).then(res => res.json()).then(console.log).catch(console.error)         
    }

    // const url = "https://us3.api.mailchimp.com/3.0/lists/141a057484/members"
    // let subscribe = async function (obj) {
    //     let options = {
    //         method: "POST",
    //         mode: "no-cors",
    //         headers: {
    //             Authorization: "apikey 2080f3daff64158e54d7024f1fd9f3af-us3"
    //         },
    //         body: {
    //             email_address: obj.email,
    //             status: "unsubscribed",
    //             client_id: "866688973521",
    //             client_secret: "0d401925499e190f057a4b7a0cc5c8702527886f45ff292e8c"
    //         }
    //     }
    //     fetch(url, options).then(res => res.json()).then(console.log)
    // }

    return (

        <div onClick={() => sendTestEmail()}> Click to send</div>

    )
}






export default Component