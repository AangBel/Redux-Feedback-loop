import React from 'react';
import ReactDOM from 'react-dom/client';
// import {createStore, combineReducers, applyMiddleware} from "redux";
// import logger from "redux-logger";
import { Provider } from 'react';

import './index.css';
import App from './components/App/App';

const feelingsValue = (state = [], action) => {
    if(action.type === "ADD_FEELINGS"){
        return action.payload;
    }
    return state;
}

// const storeInstance = createStore(
//         combineReducers({
//             feelingsValue
//         }),
//         applyMiddleware(logger)
//     )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <Provider store = {storeInstance}> */}
        <App />
        {/* </Provider> */}
    </React.StrictMode>
);
