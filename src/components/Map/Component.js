import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

function Component(props) {

    return (
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 38.8977,
         lng: -77.0365
        }}
      />
    );
 
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCQEWrr1iiuCbyT8h5CUEORaT7HEFPDtmM'
})(Component);