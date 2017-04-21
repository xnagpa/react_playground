import CommentList from 'components/widgets/blog/CommentList';
import { connect } from 'react-redux';

const stateToProps = (state) => {
  return {
    isUpdating: false,
    isFetching: state.comments.isFetching,
    error: state.comments.error,
    entries: state.comments.entries && state.comments.entries
  };
};

export default connect(stateToProps)(CommentList);
