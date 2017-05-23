import Index from 'components/views/Index';
import { connect } from 'react-redux';
import { map, assign } from 'lodash';
import like from 'actions/Like';
import { fetchPosts } from 'actions/Posts';
import { editPath } from 'helpers/routes/edit';

const stateToProps = (state) => {
  const items = map(state.posts.entries, (entry) => (
    assign(entry, {editPath: editPath(entry.id)})
  ));

  return {
    items,
    isFetching: state.posts.isFetching,
    error: state.posts.error
  };
};

const actionsToProps = (dispatch) => (
  {
    handlePaginationClick: (page) => {
      dispatch(fetchPosts(page));
    },
    increaseLikesHandler: (id) => {
      dispatch(like(id));
    }
  }
);

export default connect(stateToProps, actionsToProps)(Index);
