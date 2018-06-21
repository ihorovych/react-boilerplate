import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware, connectRouter, ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import reducer from './reducers/index';

import App from './containers/AppContainer';

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(reducer),
  compose(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <React.Fragment>
          <Switch>
            <Route path="/" component={App} exact />
          </Switch>
        </React.Fragment>
      </ConnectedRouter>
    </Provider>
  ), document.getElementById('root'),
);
