import Post from 'components/views/Post';
import { connect } from 'react-redux';
import { assign, pick } from 'lodash';
import { editPath } from 'helpers/routes/edit';

const stateToProps = (state) => {

  const parameters = state.post.entry ? assign({}, pick(state.post.entry,
             ['meta', 'image', 'likes', 'text', 'id']),
    { key: state.post.entry.id,
      editPath: editPath(state.post.entry.id)}) : null;

  return {
    item: parameters,
    isFetching: state.post.isFetching,
    error: state.post.error
  };
};

export default connect(stateToProps)(Post);
