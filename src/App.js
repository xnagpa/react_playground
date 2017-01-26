import React from 'react';
import BlogList from 'components/BlogList';
import MainLayout from 'components/layouts/MainLayout';
const App = () => (
  React.createElement(MainLayout,{},
    React.createElement(BlogList)
  )
);

export default App;
