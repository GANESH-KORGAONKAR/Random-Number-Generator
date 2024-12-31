import React, { useState } from 'react';

const RandomNum: React.FC = () => {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    setRandomNumber(number);
  };

  return (
    <div>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber !== null && <p>Generated Number: {randomNumber}</p>}
    </div>
  );
};

export default RandomNum;
