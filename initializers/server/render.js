import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import createStore from 'store';
import routes from 'routes';
import prepareData from 'helpers/prepareData';
import { compact } from 'lodash/array';

import Helmet from 'react-helmet';

const store = createStore();

export default (req, res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) =>
    Promise.all(compact(prepareData(store, renderProps))).then(() => {
      const initialState = JSON.stringify(store.getState());
      const content = ReactDOMServer.renderToString(
        React.createElement(
          Provider,
          { store },
          React.createElement(RouterContext, renderProps)
        )
      );
      const head = Helmet.rewind();
      res.status(200);
      res.render(
        'index',
        { initialState, content, head }
      );
    })
    .catch(error => console.log(`Error: ${error}`))
  );
};
