import Like from 'components/widgets/blog/elements/Like';
import { connect } from 'react-redux';
import like from 'actions/Like';
import { find, get} from 'lodash';

const stateToProps = (state, ownProps) => {

  const likeEntry = find(get(state, 'like.entries', false), { id: ownProps.id });
  const postsEntry  = find(get(state, 'posts.entries', false), { id: ownProps.id });
  const postEntry = get(state, 'post.entry', false);

  let finalEntry = likeEntry || postsEntry || postEntry

  return {
    count:  finalEntry.likes || 0,
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
