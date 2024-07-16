// src/MapPage.js
import React, { useEffect } from 'react';
import { ReactSVG } from 'react-svg';

function MapPage({ svg_path }) {
  useEffect(() => {
    console.log('Current SVG path:', svg_path);
    console.log('Current page URL:', window.location.href);
  }, [svg_path]);

  return (
    <div>
      <h1>Map</h1>
      <div style={{ width: '1920px', height: '1080px' }}>
        <ReactSVG 
          src="images/C101.svg"
          onError={() => console.error("Error loading SVG")}
        />
      </div>
    </div>
  );
}

export default MapPage;
