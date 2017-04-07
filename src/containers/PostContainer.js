import Post from 'components/Post';
import { connect } from 'react-redux';
import { assign, pick, isEmpty } from 'lodash';
import like from 'actions/Like';
const stateToProps = (state) => {
  //
  const likeParameters = state.like.entry ? assign({}, pick(state.like.entry,
            ['meta', 'image', 'likes', 'text', 'id']),
            {key: state.like.entry.id}) : {};

  const parameters = state.post.entry ? assign({}, pick(state.post.entry,
             ['meta', 'image', 'likes', 'text', 'id']),
             {key: state.post.entry.id}) : {};
  const finalParameters = isEmpty(likeParameters) ? parameters : likeParameters;

  return {
    item: finalParameters,
    isFetching: state.post.isFetching,
    error: state.post.error
  };
};

const actionsToProps = (dispatch) => {
  return {
    increaseLikesHandler: (id) => {
      dispatch(like(id));
    }
  };
};

const mergeProps = (stateProps, dispatchProps) => {
  stateProps.item.increaseLikesHandler = dispatchProps.increaseLikesHandler;
  return stateProps;
};

export default connect(stateToProps, actionsToProps, mergeProps)(Post);
