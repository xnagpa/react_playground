import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import store from 'store';
import routes from 'routes';
import prepareData from 'helpers/prepareData';
import { compact } from 'lodash/array';

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
      res.status(200);
      res.render(
        'index',
        { initialState, content }
      );
    })
  );
};

// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import { Provider } from 'react-redux';
// import { match, RouterContext } from 'react-router';
//
// import { compact } from 'lodash/array';
//
// import createStore from 'store';
// import routes from 'routes';
//
// import prepareData from 'helpers/prepareData';
//
// const store = createStore();

// export default (req, res) => {
//   match({ routes, location: req.url}, (error, redirectLocation, renderProps) => {
//     const initialState = JSON.stringify(store.getState());
//     Promise.all(compact(prepareData(store, renderProps))).then(() => {
//       const content = ReactDOMServer.renderToString(
//         React.createElement(
//           Provider,
//           { store },
//           React.createElement(RouterContext, renderProps)
//         )
//       );
//
//       res.status(200);
//       res.render(
//         'index',
//         { initialState, content }
//       );
//     });
//   });
//
// };
