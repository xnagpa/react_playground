import React from 'react';
import Item from './Item';
import PieChartPresenter from './PieChartPresenter';
import _ from 'lodash';

const ListPresenter = (props) => (
      React.createElement('div',{},React.createElement('ul', {},
      _.map(props.blogEntries, (entry) => (
        React.createElement(Item, {
          meta: entry.meta,
          image: entry.image,
          likes: entry.likes,
          text: entry.text,
          key: entry.id,
          id: entry.id,
          increaselikesHandler: props.increaseLikesHandler
        })))),
        React.createElement(PieChartPresenter,{
          blogEntries: props.blogEntries}))
);

ListPresenter.propTypes = {
  blogEntries: React.PropTypes.array,
  increaseLikesHandler: React.PropTypes.func
};

export default ListPresenter;
