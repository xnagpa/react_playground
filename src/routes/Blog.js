import MainLayout from 'components/layouts/MainLayout';

import About from 'components/views/About';
import { postsPath } from 'helpers/routes/index';
import { aboutPath } from 'helpers/routes/about';
import initialLoad from 'helpers/initialLoad';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

import PostContainer from 'containers/PostContainer';
import PostsContainer from 'containers/PostsContainer';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPosts());
  }
};

const AboutRoute = {
  path: aboutPath(),
  component: About
};


const PostRoute = {
  component: PostContainer,
  path: postsPath(),
  prepareData: (store, query, params) => {
    return store.dispatch(fetchPost(params.id));
  }
};

export default{
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    AboutRoute
  ]
};
