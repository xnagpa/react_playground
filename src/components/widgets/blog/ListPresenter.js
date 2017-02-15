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
          {props.items && generateElements(props.items)}
        </Item.Group>
      </Grid.Column>
      <Grid.Column key={1} width={4}>
        { props.items &&
          <PieChartPresenter likeTitles={likeTitles(props.items)}/>}
      </Grid.Column>
    </Grid>
  </div>
);

const likeTitles = (entries) => (
  (map(entries, (entry) => (
    [entry.text, entry.likes]
  )))
);

const generateElements = (props) => (
  map(props, (entry) => (
  <BlogItem meta={entry.meta} image={entry.image} likes={entry.likes}
            text={entry.text} id={entry.id} key={entry.id}/>
  ))
);


ListPresenter.propTypes = {
  items: React.PropTypes.array,
  increaseLikesHandler: React.PropTypes.func,
  likeTitles: React.PropTypes.array
};

export default ListPresenter;
