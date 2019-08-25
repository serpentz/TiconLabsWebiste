import React from 'react'


function Component(){

    const url = "https://us3.api.mailchimp.com/3.0/lists/141a057484/members"
    let  subscribe = async function(obj){
        let options = {
            method: "POST",
            mode: "no-cors",
            headers:{
                Authorization: "apikey 2080f3daff64158e54d7024f1fd9f3af-us3"
            },
            body: {
                email_address: obj.email,
                status: "unsubscribed",
                client_id: "866688973521",
                client_secret: "0d401925499e190f057a4b7a0cc5c8702527886f45ff292e8c"
        }
    }
        fetch(url, options).then(res => res.json()).then(console.log) 
    }

    return (

          <div onClick={() => subscribe({email: "abyicherinet@gmail.com", name: "absalom"})}> Click to send</div>
         
      )}
    
  




export default Component