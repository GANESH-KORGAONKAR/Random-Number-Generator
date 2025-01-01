import React, { useState } from 'react';

const RandomNum: React.FC = () => {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    setRandomNumber(number);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Random Number Generator</h1>
      <button
        onClick={generateRandomNumber}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Generate Random Number
      </button>
      {randomNumber !== null && (
        <p className="mt-4 text-lg font-semibold text-gray-700">
          Generated Number: <span className="text-blue-500">{randomNumber}</span>
        </p>
      )}
    </div>
  );
};

export default RandomNum;
