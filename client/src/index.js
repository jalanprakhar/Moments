import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
const store = configureStore({reducer:reducers,middleware:[thunk]});

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);