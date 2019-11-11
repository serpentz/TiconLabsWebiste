import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody } from 'mdbreact';

class ModalPage extends Component {
state = {
  modal6: false,
  modal7: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
      <MDBContainer  >
        <MDBBtn color="warning" onClick={this.toggle(11)}>Top</MDBBtn>
        <MDBModal isOpen={this.state.modal11} toggle={this.toggle(11)} frame position="top">
          <MDBModalBody className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;