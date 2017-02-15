import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';
import DevTools from 'containers/DevTools';

const store = createStore(reducers, compose(applyMiddleware(thunk),
  DevTools.instrument()));
export default store;
