import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LocationForm from './components/LocationForm';
import MapPage from './components/MapPage';
import csvData from './table.csv'; // Assuming the CSV is placed in the public directory

function App() {
  const [coordinates, setCoordinates] = useState([]);
  const navigate = useNavigate();

  const handleLocationSubmit = ({ location, option }) => {
    console.log('Submitted Location:', location);
    console.log('Selected Option:', option);
    
    // Function to parse CSV and find coordinates
    fetch(csvData)
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n');
        for (const line of lines) {
          const [loc, x1, y1, x2, y2] = line.split(',');
          if (loc === location) {
            setCoordinates([{x1: parseFloat(x1), y1: parseFloat(y1), x2: parseFloat(x2), y2: parseFloat(y2)}]);
            console.log('Coordinates found:', {x1: parseFloat(x1), y1: parseFloat(y1), x2: parseFloat(x2), y2: parseFloat(y2)});
            navigate('/map');
            break;
          }
        }
      })
      .catch(error => {
        console.error('Error fetching CSV:', error);
      });
  };

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LocationForm onSubmit={handleLocationSubmit} />} />
        <Route path="/map" element={<MapPage coordinates={coordinates} />} />
      </Routes>
    </div>
  );
}

export default App;

