import React from 'react';
import Helmet from 'react-helmet';
import ListPresenter from 'components/widgets/blog/ListPresenter';
const Index = ({ items }) => (
  <div>
    <ListPresenter items={items}/>
    <Helmet
      title = 'Список чертовых постов '
    />
  </div>
);

Index.propTypes = {
  items: ListPresenter.propTypes.array,
  increaseLikesHandler: ListPresenter.propTypes.func,
  likeTitles: ListPresenter.propTypes.array
};

export default Index;
