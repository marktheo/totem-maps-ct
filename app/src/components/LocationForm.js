import React, { useState } from 'react';
import '../App.css'; // Import the CSS file for styling


function LocationForm({ onSubmit }) {
  const [location, setLocation] = useState('');
  const [option, setOption] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ location, option });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Enter Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="option"
            value="option1"
            checked={option === 'option1'}
            onChange={(e) => setOption(e.target.value)}
          />
          Option 1
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="option"
            value="option2"
            checked={option === 'option2'}
            onChange={(e) => setOption(e.target.value)}
          />
          Option 2
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default LocationForm;
