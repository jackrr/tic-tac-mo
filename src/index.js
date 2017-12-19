import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import { connectRoutes } from 'redux-first-router'

import reducers from 'state/reducers'
import rootSaga from 'state/sagas'
import routes from './routes'
import App from './App'

const history = createHistory()

const {
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer
} = connectRoutes(history, routes);

const rootReducer = combineReducers({ location: routerReducer, ...reducers })

const sagaMiddleware = createSagaMiddleware()
const enhancers = compose(
  routerEnhancer,
  applyMiddleware(
    routerMiddleware,
    sagaMiddleware,
    createLogger()
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, enhancers)
sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('main')
)
