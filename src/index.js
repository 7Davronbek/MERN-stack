import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css'
import './sass/main.scss'

import Navbar from './components/Navbar';

ReactDOM.render(
  <BrowserRouter>
  <Navbar />
    <Switch>
      <Route path='/' exact component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
