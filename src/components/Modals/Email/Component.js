import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody } from 'mdbreact';
import {connect} from 'react-redux'
import { Modal } from "../../../redux/actions";


function Component(props) {

  let toggle = () => {
    let action = Modal.toggle("email",!props.isOpen)
    
    props.dispatch(action)

  }

  let modalText = () => {
    let returnString = ""
    if(props.isError){
      returnString += "Error"
    } else if( props.isSuccess){
      returnString += " Success"
    }else{
      returnString +="TFFF"
    }
    return returnString
  }

  return (
      <MDBContainer >
        <MDBBtn color="warning" onClick={() => toggle()}>Top</MDBBtn>
        <MDBModal isOpen={props.isOpen} toggle={() => toggle()} frame position="top">
          <MDBModalBody className="text-center">
           {modalText()}
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }



const mapState  = (state) =>{
  return {
    isOpen: state.modal.email,
    isFetching: state.email.isFetching,
    isError: state.email.isError,
    isSuccess: state.email.isSuccess
  }
} 

export default connect(mapState)(Component);