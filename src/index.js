import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import manageApp from './reducers/manageApp'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store= createStore(manageApp, composeEnhancers(applyMiddleware(thunk)))

export const BASE_URL = process.env.NODE_ENV === 'production' ? "https://myadventurebook.herokuapp.com/" : "http://localhost:3001/api/v1"


ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
