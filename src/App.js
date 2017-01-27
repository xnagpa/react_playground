import React from 'react';
// import BlogList from 'components/BlogList';
// import MainLayout from 'components/layouts/MainLayout';
import { Router, browserHistory } from 'react-router';
import routes from 'routes';

const App = () => (
  <Router history={browserHistory} routes={routes} />
);

export default App;
