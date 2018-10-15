import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ParkingComponent from './components/parking.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ParkingComponent />, document.getElementById('root'));
serviceWorker.unregister();
