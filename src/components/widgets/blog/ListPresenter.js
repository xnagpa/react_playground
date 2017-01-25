import Item from './Item';
import PieChartPresenter from './PieChartPresenter';
import { map } from 'lodash/collection';
import  React from 'react';
const { DOM } = React;

const ListPresenter = (props) => (
      DOM.div({}, DOM.ul({},
      map(props.blogEntries, (entry) => (
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
          likeTitles: props.likeTitles}))
);

ListPresenter.propTypes = {
  blogEntries: React.PropTypes.array,
  increaseLikesHandler: React.PropTypes.func,
  likeTitles: React.PropTypes.array
};

export default ListPresenter;
