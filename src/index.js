import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import logger from "redux-logger";
import { Provider } from 'react-redux';
import {createRoot} from "react-dom/client";

import './index.css';
import App from './components/App/App';

const feelingsValue = (state = [], action) => {
    if(action.type === "ADD_FEELINGS"){
        return action.payload;
    }
    return state;
}

const understandValue = (state = [], action) => {
    if(action.type === "ADD_UNDERSTANDING"){
        return action.payload;
    }
    return state;
}

const supportValue = (state = [], action) => {
    if(action.type === "ADD_SUPPORT"){
        return action.payload;
    }
    return state;
}

const commentValue = (state = [], action) => {
    if(action.type === "ADD_COMMENT"){
        return action.payload;
    }
    return state;
}

const composeEnhancers = 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeInstance = createStore(
        combineReducers({
            feelingsValue:feelingsValue,
            understandValue:understandValue,
            supportValue:supportValue,
            commentValue:commentValue
        }
        ),
        composeEnhancers(
            applyMiddleware(logger))
    );

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store = {storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
