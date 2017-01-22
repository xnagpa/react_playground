import React from 'react';
import Item from './Item';
import PieChartPresenter from './PieChartPresenter';
import _ from 'lodash';

class ListPresenter extends React.Component {
  render() {
    return React.createElement('div',{},React.createElement('ul', {},
      _.map(this.props.blogEntries, (entry) => (
        React.createElement(Item, {
          meta: entry.meta,
          image: entry.image,
          likes: entry.likes,
          text: entry.text,
          key: entry.id,
          id: entry.id,
          increaselikesHandler: this.props.increaseLikesHandler
        })))),
        React.createElement(PieChartPresenter,{
          blogEntries: this.props.blogEntries}));
  }
}

ListPresenter.propTypes = {
  blogEntries: React.PropTypes.array,
  increaseLikesHandler: React.PropTypes.func
};

export default ListPresenter;
