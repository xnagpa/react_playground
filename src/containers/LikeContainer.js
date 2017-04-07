import Like from 'components/widgets/blog/elements/Like';
import { connect } from 'react-redux';
import like from 'actions/Like';

const stateToProps = (state) => {

  const parameters = state.post.entry ? state.post.entry.likes : null;
  const likeParameters = state.like.entry ? state.like.entry.likes : null;

  const finalParameters = likeParameters == 0 ? parameters : likeParameters;

  return {
    count: finalParameters,
    isFetching: state.like.isFetching,
    error: state.like.error
  };
};

const actionsToProps = (dispatch) => {
  return {
    increaseLikesHandler: (id) => {
      dispatch(like(id));
    }
  };
};

// <Like count= {likes}
//       increaseLikesHandler={increaseLikesHandler}
//       id = { id }/>

export default connect(stateToProps, actionsToProps)(Like);
