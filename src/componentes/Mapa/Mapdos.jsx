import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -33.043653,
      lng: -71.627484
    },
    zoom: 20
  };
 //lat:-33.043653,lng:-71.627484

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyCE-9odbKyIEJykp0KazN_qtZbFyaNPQtc"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-33.043653}
            lng={30.337844}
            text="Hotel Ecomusic"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;