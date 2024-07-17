import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import LocationForm from './components/LocationForm';
import MapPage from './components/MapPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [path, setPath] = useState([]);
  const navigate = useNavigate();

  const handleLocationSubmit = ({ location, category, selectOption }) => {
    console.log('Submitted Location:', location);
    console.log('Category:', category);
    console.log('Selected Option:', selectOption);

    //set svg_path
    setPath(selectOption);
    navigate('/map');

  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<LocationForm onSubmit={handleLocationSubmit} />} />
        <Route path="/map" element={<MapPage svg_path={path} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

