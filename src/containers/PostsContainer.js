import ListPresenter from 'components/widgets/blog/ListPresenter';
import { connect } from 'react-redux';
import { map } from 'lodash';
import like from 'actions/Like';
import { fetchPage } from 'actions/Pagination';

const stateToProps = (state) => {
  const params = state.pagination.entries.length == 0 ?
    state.posts.entries : state.pagination.entries;

  const paramsWithLike = state.like.entry ? setLikeOnEntries(state.like.entry, params) : null;

  return {
    items: paramsWithLike || params,
    isFetching: state.posts.isFetching,
    error: state.posts.error
  };
};

const actionsToProps = (dispatch) => {
  return {
    handlePaginationClick: (page) => {
      dispatch(fetchPage(page));
    },
    increaseLikesHandler: (id) => {
      dispatch(like(id));
    }
  };
};

const setLikeOnEntries = (entryToReplace, entries) => {
  return map(entries, (entry) => {
    return entry.id == entryToReplace.id ? entryToReplace : entry;
  });
};

export default connect(stateToProps, actionsToProps)(ListPresenter);
