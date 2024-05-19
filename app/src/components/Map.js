import React, { useEffect, useRef } from 'react';
import {ReactComponent as MapSvg} from '../logo.svg'

function Map({ coordinates }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    if (coordinates.length > 0) {
      coordinates.forEach(coord => {
        context.beginPath();
        context.moveTo(coord.x1, coord.y1);
	context.lineTo(coord.x2, coord.y2);
        context.stroke();
      });
    }
  }, [coordinates]);

  return (
    <div style={{ position: 'relative', width: '600px', height: '400px' }}>
      <MapSvg width="600" height="400" style={{ position: 'absolute', top: 0, left: 0 }} />
      <canvas ref={canvasRef} width="600" height="400" style={{ position: 'absolute', top: 0, left: 0 }} />
    </div>
  );
}

export default Map;

