import ListPresenter from 'components/widgets/blog/ListPresenter';
import { connect } from 'react-redux';

const stateToProps = (state) => ({
  items: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

export default connect(stateToProps)(ListPresenter);
