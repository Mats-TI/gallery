/* eslint-disable no-unused-vars */
import React from 'react';

import './App.css';
import Wrapper from './components/wrapper';
import ErrorHandler from './components/ErrorHandler';

function App() {
  return (
    <div className="App">
      <ErrorHandler>
      <Wrapper/>
      </ErrorHandler>
    </div>
  );
}

export default App;
