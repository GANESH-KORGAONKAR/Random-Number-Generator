import React from 'react';
import './App.css';
import RandomNum from './components/RandomNum';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <RandomNum />
    </div>
  );
};

export default App;
