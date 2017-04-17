import Index from 'components/views/Index';
import { connect } from 'react-redux';
import { map } from 'lodash';
import like from 'actions/Like';
import { fetchPosts } from 'actions/Posts';

const stateToProps = (state) => {
  return {
    items: state.posts.entries,
    isFetching: state.posts.isFetching,
    error: state.posts.error
  };
};

const actionsToProps = (dispatch) => {
  return {
    handlePaginationClick: (page) => {
      dispatch(fetchPosts(page));
    },
    increaseLikesHandler: (id) => {
      dispatch(like(id));
    }
  };
};

export default connect(stateToProps, actionsToProps)(Index);
