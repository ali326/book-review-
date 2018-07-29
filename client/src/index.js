import React from 'react';
import ReactDOM from 'react-dom';
import {BrowesrRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import reduxThunk from 'redux-thunk';
import Routes from './routes'

import registerServiceWorker from './registerServiceWorker';


const createStoreWithMiddlware = applyMiddleware(promiseMiddleware,reduxThunk)(createStore)


ReactDOM.render(
    <Provider store={createStoreWithMiddlware }>
       <BrowesrRouter>
           <Routes />
       </BrowesrRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
