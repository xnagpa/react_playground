import Post from 'components/Post';
import { connect } from 'react-redux';
import { assign, pick } from 'lodash';
const stateToProps = (state) => {

  const parameters = state.post.entry ? assign({}, pick(state.post.entry,
             ['meta', 'image', 'likes', 'text', 'id']),
             {key: state.post.entry.id}) : {};

  return {
    item: parameters,
    isFetching: state.post.isFetching,
    error: state.post.error
  };
};

export default connect(stateToProps)(Post);
