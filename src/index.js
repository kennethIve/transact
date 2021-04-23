import React from 'react';
import ReactDOM, { render } from 'react-dom'
import {Provider} from 'react-redux'

import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducers from './reducers'
import { createStore } from 'redux';
import {App} from './App';

const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );
reportWebVitals();
