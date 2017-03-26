import React from 'react';
import Helmet from 'react-helmet';
import ListPresenter from 'components/widgets/blog/ListPresenter';
const Index = ({ items }) => (
  <div>
    <ListPresenter items={items}/>
    <Helmet
      title = 'Список чертовых постов'
    />
  </div>
);

ListPresenter.propTypes = {
  items: ListPresenter.PropTypes.array,
  increaseLikesHandler: ListPresenter.PropTypes.func,
  likeTitles: ListPresenter.PropTypes.array
};

export default Index;
