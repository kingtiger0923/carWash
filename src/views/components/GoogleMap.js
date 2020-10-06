import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const location = {
  address: '11283 Homestead Rd Houston Texas 77016',
  lat: 29.8825232,
  lng: -95.3031586,
}

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

function GoogleMap() {
  return (
    <div className="map">
      {/* <h2 className="map-h2">Come Visit Us At Our Faevaa</h2> */}

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDPqOEz6CYCBXU364qWs35E9IgLZ1DeGuM' }}
          defaultCenter={location}
          defaultZoom={12}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
}

export default GoogleMap;