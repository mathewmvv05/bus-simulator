import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ParkingComponent from './components/parking.js';
import * as serviceWorker from './serviceWorker';
import BusComponent from './components/bus.js';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ParkingComponent />, document.getElementById('root'));
// ReactDOM.render(<BusComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
