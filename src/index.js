import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import App from './containers/AppContainer';
import { store, history } from './app/store';

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
