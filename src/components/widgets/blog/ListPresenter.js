import Item from './Item';
import PieChartPresenter from './PieChartPresenter';
import { map } from 'lodash/collection';
import  React from 'react';
const { DOM } = React;
import { assign, pick } from 'lodash';

const ListPresenter = (props) => (
      DOM.div({}, DOM.ul({},
      map(props.blogEntries, (entry) => (
        React.createElement(Item,
          assign({}, pick(entry, ['meta', 'image', 'likes', 'text', 'id']),
            {increaselikesHandler: props.increaseLikesHandler, key: entry.id,})
        )))),
        React.createElement(PieChartPresenter,{
          likeTitles: props.likeTitles}))
);
ListPresenter.propTypes = {
  blogEntries: React.PropTypes.array,
  increaseLikesHandler: React.PropTypes.func,
  likeTitles: React.PropTypes.array
};

export default ListPresenter;
