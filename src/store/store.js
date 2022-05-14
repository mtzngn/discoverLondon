import {compose, applyMiddleware} from 'redux';
import {configureStore} from '@reduxjs/toolkit';

import thunk from 'redux-thunk';
import reducers from '../reducers';

const store = configureStore(reducers, {}, compose(applyMiddleware(thunk)));

export default store;
