import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//function to diplay PartOne
const feel = (state = '', action) => {
    if (action.type === 'SET_FEEL') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL')
    {
        return '';
    }
    return state;
}

const under = (state = '', action) => {
    if (action.type === 'SET_UNDER') {
        return action/payload;
    } else if (action.type === 'CLEAR_ALL')
    {
        return '';
    }
    return state;
}


const storeInstance = createStore(
    combineReducers(
        {
            feel,
            under,
        }
    )
)

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
        </Provider>, document.getElementById('root'));
registerServiceWorker();
