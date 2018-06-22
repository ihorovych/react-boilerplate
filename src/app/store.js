import { routerMiddleware, connectRouter } from 'connected-react-router';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

export const store = createStore(
  connectRouter(history)(reducer),
  applyMiddleware(sagaMiddleware, routerMiddleware(history), logger),
);

sagaMiddleware.run(saga);
