// src/MapPage.js
import React from 'react';
import Map from './Map';

function MapPage({ coordinates }) {
  return (
    <div>
      <h1>Map</h1>
      <Map coordinates={coordinates} />
    </div>
  );
}

export default MapPage;

