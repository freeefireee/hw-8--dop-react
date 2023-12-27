import './style.css';
import React, { useState, useEffect } from 'react';

const Inp = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayedValues, setDisplayedValues] = useState([]);

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem('displayedValues'));
    if (storedValues) {
      setDisplayedValues(storedValues);
    }
  }, []); 

  const handleClick = () => {
    const newValues = [inputValue, ...displayedValues];
    setDisplayedValues(newValues);
    setInputValue('');

    localStorage.setItem('displayedValues', JSON.stringify(newValues));
  };

  return (
    <div>
        <div className="block-content">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      
      <button className="button-30" role="button" onClick={handleClick}>
        add name
      </button>
      </div>
      <h2>{displayedValues.map((value, index) => (
        <p key={index}>{value}</p>
      ))}</h2>
    </div>
  );
};

export default Inp;
