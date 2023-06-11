import React, { useState } from 'react';

const NumberAdder: React.FC = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [sum, setSum] = useState('');

  const handleNumber1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber1(event.target.value);
  };

  const handleNumber2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber2(event.target.value);
  };

  const handleCalculateSum = () => {
    const result = Number(number1) + Number(number2);
    setSum(result.toString());
  };

  return (
    <div>
      <input type="text" value={number1} onChange={handleNumber1Change} />
      <input type="text" value={number2} onChange={handleNumber2Change} />
      <button onClick={handleCalculateSum}>Calculate Sum</button>
      <input type="text" value={sum} readOnly />
    </div>
  );
};

export default NumberAdder;