import React from 'react';
// import BlogList from 'components/BlogList';
// import MainLayout from 'components/layouts/MainLayout';
import { Router, match, browserHistory } from 'react-router';
import routes from 'routes';
import prepareData from 'helpers/prepareData';
import store from 'store';
import { Provider } from 'react-redux';
import DevTools from 'containers/DevTools';
import ReactDOM from 'react-dom';

function historyCb(location) {
  match({ location, routes }, (error, redirect, state) => {
    if (!error && !redirect) {
      prepareData(store, state);
    }
  });
  return true;
}

browserHistory.listenBefore(historyCb);

historyCb(window.location);


const App = () => (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
);

ReactDOM.render(<DevTools store={ store }/>,
  document.getElementById('devtools'));

export default App;
