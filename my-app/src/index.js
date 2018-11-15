import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';



ReactDOM.render(
    <Provider >
    <App />
    </Provider>
    , document.getElementById('root'));

