import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {DataLayer} from "../store/DataLayer";
import {reducer, initialState} from '../store/reducer'
ReactDOM.render(
  <React.StrictMode>
      <DataLayer initialState={initialState} reducer={reducer}>
          <App />
      </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);
