import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import Head from './Components/Head.js';
import Enfermedades from './Components/Head.js';
import Anticonceptivos from './Components/Head.js';
import Consejos from './Components/Head.js';
import Embarazos from './Components/Head.js';
import ConsejosSexo from './Components/Head.js';

ReactDOM.render(
  <React.StrictMode>
    <Welcome/>
  </React.StrictMode>,
  document.getElementById('root'),
);
serviceWorker.unregister();
