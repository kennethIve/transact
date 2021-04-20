import React,{useContext,createContext,useState} from 'react';
import ReactDOM, { render } from 'react-dom'
import {Provider} from 'react-redux'
//import rootReducer from './reducers'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducers from './reducers'
//import './resources/common.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NotFound404 from './errorPages/NotFound404';
import { createStore } from 'redux';

const authContext = createContext();

const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path = "/login" component = { LoginPage } />
          <Route exact path = "/" component = { MainPage } />
          <Route path = "*" component = { NotFound404 } />
        </Switch>
      </Router>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );

reportWebVitals();
