import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          African Marketplace App
        </h1>
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
