import Index from 'components/views/Index';
import { connect } from 'react-redux';

const stateToProps = (state) => {
  if (state.pagination.entries.length == 0) {
    console.log("ENTRIES!!!!");
    return {
      items: state.posts.entries,
      isFetching: state.posts.isFetching,
      error: state.posts.error
    };
  }
  else {
    console.log("PAGINATION!!!");
    return {
      items: state.pagination.entries,
      isFetching: state.posts.isFetching,
      error: state.posts.error
    };
  }
};
export default connect(stateToProps)(Index);
