import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
	plantData
} from './PlantData';

function App() {
	console.dir(plantData);
  return (
    <div className="App">
			<h1>Garden Schedule Validator</h1>
			<p>Create and validate garden schedules</p>
    </div>
  );
}

export default App;
