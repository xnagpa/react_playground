import Index from 'components/views/Index';
import { connect } from 'react-redux';

const stateToProps = (state) => ({
  items: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});
export default connect(stateToProps)(Index);
