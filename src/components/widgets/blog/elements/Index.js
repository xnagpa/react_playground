import React from 'react';

import Helmet from 'react-helmet';

import ListPresenter from 'components/widgets/blog/ListPresenter';
const Index = (props) => {
  return <div>
    <ListPresenter items = { props.items } handlePaginationClick = { props.handlePaginationClick }  />
    <Helmet title = 'Posts list'/>
  </div>;
};

Index.propTypes = {
  items: ListPresenter.propTypes.items
};

export default Index;
