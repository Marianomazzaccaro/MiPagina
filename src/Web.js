import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Servicios from './components/Servicios.js'
import Home from './components/Home.js'
import Nosotros from './components/Nosotros.js'




function Web(){
  return (
          
    <div>
    <Switch>
            <Route exact path="/">
                    <Home />
            </Route>
            <Route exact path="/servicios">
                    <Servicios />
            </Route>
            <Route exact path="/nosotros">
                    <Nosotros />
            </Route>
    </Switch>
    

    </div>
  )
  

}
export default Web;

