import Index from 'components/views/Index';
import { connect } from 'react-redux';

const stateToProps = (state) => {
  if (state.pagination.entries.length == 0) {
    return {
      items: state.posts.entries,
      isFetching: state.posts.isFetching,
      error: state.posts.error
    };
  }
  else {
    return {
      items: state.pagination.entries,
      isFetching: state.posts.isFetching,
      error: state.posts.error
    };
  }
};
export default connect(stateToProps)(Index);
