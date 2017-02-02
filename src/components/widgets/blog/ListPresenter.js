import BlogItem from './BlogItem';
import PieChartPresenter from './PieChartPresenter';
import { Grid, Item } from 'semantic-ui-react';
import { map } from 'lodash/collection';
import  React from 'react';

const ListPresenter = (props) => (
      <div>
        <Grid>
          <Grid.Column key={0} width={12}>
            <Item.Group>
              {generateElements(props)}
            </Item.Group>
          </Grid.Column>
          <Grid.Column key={1} width={4}>
            <PieChartPresenter likeTitles={props.likeTitles}/>
          </Grid.Column>
        </Grid>
      </div>
);

const generateElements = (props) => (

    map(props.blogEntries, (entry) => (
    <BlogItem meta={entry.meta} image={entry.image} likes={entry.likes}
              text={entry.text} id={entry.id} key={entry.id}
              increaselikesHandler= {props.increaseLikesHandler} />
    ))
);

ListPresenter.propTypes = {
  blogEntries: React.PropTypes.array,
  increaseLikesHandler: React.PropTypes.func,
  likeTitles: React.PropTypes.array
};

export default ListPresenter;
