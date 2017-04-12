import React from 'react';

import Helmet from 'react-helmet';

import ListPresenter from 'components/widgets/blog/ListPresenter';
const Index = ({ items }) => (
  <div>
    <ListPresenter items = { items } />
    <Helmet title = 'Posts list'/>
  </div>
);

Index.propTypes = {
  items: ListPresenter.propTypes.items
};

export default Index;
