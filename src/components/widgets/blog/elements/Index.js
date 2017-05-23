import React from 'react';

import Helmet from 'react-helmet';

import ListPresenter from 'components/widgets/blog/ListPresenter';
const Index = (props) => (
  <div>
    <ListPresenter
      items = { props.items }
      handlePaginationClick = { props.handlePaginationClick }  />
    <Helmet title = 'Posts list'/>
  </div>
);

Index.propTypes = {
  items: ListPresenter.propTypes.items,
  handlePaginationClick: ListPresenter.propTypes.handlePaginationClick
};

export default Index;
