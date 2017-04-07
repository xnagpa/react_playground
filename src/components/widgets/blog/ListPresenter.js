import BlogItemList from './BlogItemList';
import PaginationMenu from './elements/PaginationMenu';
import PieChartPresenter from './PieChartPresenter';
import { Grid, Item } from 'semantic-ui-react';
import { map } from 'lodash/collection';
import  React from 'react';

const ListPresenter = (props) => {
  return <div>
    <Grid>
      <Grid.Column key={0} width={12}>
        <Item.Group>
          { props.items &&
            <BlogItemList items={props.items}
              increaseLikesHandler={props.increaseLikesHandler}/> }
        </Item.Group>
        <Item.Group>
          { props.items && props.items.length > 0 && <PaginationMenu
            handlePaginationClick={props.handlePaginationClick}
            totalCount = {props.items[0].totalCount}/> }
        </Item.Group>
      </Grid.Column>
      <Grid.Column key={1} width={4}>
        { props.items &&
          <PieChartPresenter likeTitles={likeTitles(props.items)}/>}
      </Grid.Column>
    </Grid>
  </div>;
};

const likeTitles = (entries) => (
  (map(entries, (entry) => (
    [entry.text, entry.likes]
  )))
);

ListPresenter.propTypes = {
  items: React.PropTypes.array,
  increaseLikesHandler: React.PropTypes.func,
  likeTitles: React.PropTypes.array
};

export default ListPresenter;
