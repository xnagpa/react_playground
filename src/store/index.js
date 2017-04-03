import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';
import DevTools from 'containers/DevTools';

const store = (initialState) =>
  createStore(reducers,
              initialState,
              compose(applyMiddleware(thunk),
  DevTools.instrument()));
export default store;
