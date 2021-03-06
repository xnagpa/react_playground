import CommentList from 'components/widgets/blog/CommentList';
import { connect } from 'react-redux';
import createComment from 'actions/CreateComment';

const stateToProps = (state) => (
  {
    isUpdating: false,
    isFetching: state.comments.isFetching,
    error: state.comments.error,
    entries: state.comments.entries && state.comments.entries
  }
);

const actionsToProps = (dispatch, ownProps) => (
  {
    createCommentHandler: (payload) => {
      dispatch(createComment(ownProps.id, payload));
    }
  }
);
export default connect(stateToProps, actionsToProps)(CommentList);
