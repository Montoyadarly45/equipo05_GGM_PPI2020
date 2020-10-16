import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Enfermedades from './Enfermedades.js';

const Routs = () => {
  return(
    <Switch>
      <Route exact path='/' component={Enfermedades}/>
    </Switch>
  )
}
export default Routs;
