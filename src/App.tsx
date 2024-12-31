import React from 'react';
import './App.css';
import RandomNum from './components/RandomNum';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Random Number Generator</h1>
      <RandomNum />
    </div>
  );
};

export default App;
