/* global google */
import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs
} from "react-google-maps";

const Markers = props => {
  return (
    <GoogleMap defaultZoom={props.zoom} defaultCenter={props.center}>
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Markers));
