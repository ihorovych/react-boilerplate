import { connect } from 'react-redux';

import App from '../components/App';
// import { initSomeAction } from '../app/actions';

export default connect(
  state => ({
    store: state,
  }),
  dispatch => ({
    // someAction: () => dispatch(initSomeAction()),
  }),
)(App);
