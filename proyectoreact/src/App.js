import React from 'react';
import App from './App';
import {Link} from 'react-router-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Routs from './Routes.js';
import Head from './Components/Head.js'
import Enfermedades from './Enfermedades.js';
import Anticonceptivos from './Anticonceptivos.js';
import Consejos from './Consejos.js';
import Embarazos from './Embarazos.js';
import ConsejosSexo from './ConsejosSexo.js';
import './animate.min.css';
import './bootstrap.min.css';
import './font-awesome.min.css';
import './lightbox.css';
import './main.css';
import './responsive.css';


  function Welcome(props){
    return(

      <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Head}/>
            <Route exact path='/Enfermedades' component={Enfermedades}/>
            <Route exact path='/Anticonceptivos' component={Anticonceptivos}/>
            <Route exact path='/Consejos' component={Consejos}/>
            <Route exact path='/Embarazos' component={Embarazos}/>
            <Route exact path='/ConsejosSexo' component={ConsejosSexo}/>
          </Switch>
      </BrowserRouter>
    );
  }
export default Welcome;
