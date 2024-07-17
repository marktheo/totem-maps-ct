import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import logoUfrj from '../ufrj_neg.png'
import '../App.css'; // Import the CSS file for styling
import './Header/Header' // Import Header
import csvData from '../table.csv'

function LocationForm({ onSubmit }) {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [selectOption, setSelectOption] = useState('');
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch(csvData); // Substitua pelo caminho real do seu arquivo CSV
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const reader = response.body.getReader();
        const result = await reader.read(); // Assume the file is small enough to read in one go
        const decoder = new TextDecoder('utf-8');
        const csv = decoder.decode(result.value);
        console.log('CSV content:', csv); // Debug: ver conteúdo bruto do CSV
        const parsed = Papa.parse(csv, { header: true, skipEmptyLines: true });

        if (parsed.errors.length > 0) {
          throw new Error('Error parsing CSV');
        }

        console.log('Parsed data:', parsed.data); // Debug: ver dados analisados
        setOptions(parsed.data);
      } catch (error) {
        console.error('Error fetching or parsing the CSV file:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOptions();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ location, category, selectOption });
  };

  const filteredOptions = options.filter((opt) => {
    if (category === 'class') {
      return opt.category === 'class';
    } else if (category === 'laboratories') {
      return opt.category === 'laboratories';
    }
    return false;
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='form-content'>

      <div className='header-form'>
        <img src={logoUfrj} />
        <h1>Está procurando algum lugar?</h1>
        <h2>Procure por aqui primeiro!</h2>
      </div>
          <label>
            Categoria:
            <select required value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Selecione uma categoria</option>
              <option value="class">Salas</option>
              <option value="laboratories">Laboratórios</option>
            </select>
          </label>
        </div>
        {category && (
          <div>
            <label>
              Selecione uma opção:
              <select required value={selectOption} onChange={(e) => setSelectOption(e.target.value)}>
                <option value="">Selecione uma opção</option>
                {filteredOptions.map((opt, index) => (
                  <option key={index} value={opt.svg_path}>
                    {opt.location}
                  </option>
                ))}
              </select>
            </label>
          </div>
        )}
        <button type="submit">Buscar</button>
        <div className='header-form'>
          <div className='logo-form'>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LocationForm;
