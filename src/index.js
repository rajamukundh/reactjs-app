import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore , applyMiddleware} from 'redux'
import App from './containers/App'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { getAllPlayers } from './actions/receive.players'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
    reducers,
    applyMiddleware(...middleware)
);

store.dispatch(getAllPlayers())

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);