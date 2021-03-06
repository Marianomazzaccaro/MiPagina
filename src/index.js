import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/master.css';
import {BrowserRouter} from 'react-router-dom';
import Web from './Web.js';


// import "bootstrap/dist/css/bootstrap.min.css"
//import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <BrowserRouter>
    <Web />
  </BrowserRouter>,
  document.getElementById('root')
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
