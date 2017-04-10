import Like from 'components/widgets/blog/elements/Like';
import { connect } from 'react-redux';
import like from 'actions/Like';
import { find } from 'lodash';

const stateToProps = (state, ownProps) => {

  let entry = state.like.entries && find(state.like.entries,
    { id: ownProps.id });
  entry = entry == undefined ? state.posts.entries && find(state.posts.entries,
    { id: ownProps.id }) : entry;

  return {
    count: entry && entry.likes || 0,
    isFetching: state.like.isFetching,
    error: state.like.error
  };
};

const actionsToProps = (dispatch, ownProps) => {
  return {
    increaseLikesHandler: () => {
      dispatch(like(ownProps.id));
    }
  };
};

export default connect(stateToProps, actionsToProps)(Like);
